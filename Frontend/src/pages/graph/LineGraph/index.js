import React, { useEffect, useState } from "react";
import LoadingModal from "@/components/LoadingModal";
import PropTypes from "prop-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import * as api from "@/api";
import { checkMonth } from "@/utils/graph";
import * as LineGraphs from "./style";

function LineGraph({ date }) {
  const [commitData, setCommitData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCommitsPerMonth = async () => {
    setLoading(true);
    const { year, month, thisMonth } = checkMonth(date);

    const data = await api.getCommitsTotalPerMonth(year);
    if (data.success) {
      let { commitEachMonth } = data;

      if (month === thisMonth) {
        commitEachMonth = commitEachMonth.slice(0, thisMonth + 1);
      }

      const checkEmptyArray = commitEachMonth.every((it) => it === 0);
      if (checkEmptyArray) {
        setCommitData([]);
      } else {
        const createData = commitEachMonth.slice(1).map((commitCnt, index) => ({
          name: `${index + 1}월`,
          commit: commitCnt,
        }));
        setCommitData(createData);
      }
    } else {
      setCommitData([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    getCommitsPerMonth();
  }, []);

  return (
    <LineGraphs.Container>
      {loading ? (
        <LoadingModal />
      ) : (
        <LineGraphs.LineGraphContainer>
          {commitData.length ? (
            <>
              <LineGraphs.Title>월간 커밋 추이</LineGraphs.Title>
              <LineGraphs.Wrapper>
                <LineChart width={350} height={280} data={commitData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="commit"
                    stroke="#6ABD8C"
                    activeDot={{ r: 2 }}
                    isAnimationActive={false}
                  />
                </LineChart>
              </LineGraphs.Wrapper>
            </>
          ) : (
            <LineGraphs.NoData>데이터가 없습니다.</LineGraphs.NoData>
          )}
        </LineGraphs.LineGraphContainer>
      )}
    </LineGraphs.Container>
  );
}

LineGraph.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default LineGraph;
