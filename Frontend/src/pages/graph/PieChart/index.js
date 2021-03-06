import React from "react";
import PropTypes from "prop-types";
import { PieChart, Pie, Cell } from "recharts";
import LoadingModal from "@/components/LoadingModal";
import githubLangColors from "./github-lang-colors.json";
import * as PieCharts from "./style";

function PieChartComponent({ reposLanguage, loading }) {
  const languageCountObj = {};

  reposLanguage.forEach((it) => {
    if (Object.prototype.hasOwnProperty.call(languageCountObj, it.language)) {
      languageCountObj[it.language] += 1;
    } else {
      languageCountObj[it.language] = 1;
    }
  });

  const language = Object.keys(languageCountObj);
  const values = Object.values(languageCountObj);

  let repoLanguageArray = [];
  language.forEach((it, idx) => {
    repoLanguageArray.push({
      name: language[idx],
      value: +values[idx],
    });
  });

  repoLanguageArray = repoLanguageArray
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  let denominator = 0;
  repoLanguageArray.forEach((it) => {
    denominator += it.value;
  });

  const codeRatioArray = [];
  repoLanguageArray.forEach((it) => {
    codeRatioArray.push({
      name: it.name,
      value: +((it.value / denominator) * 100).toFixed(2),
    });
  });

  const langColor = githubLangColors;
  const COLORS = codeRatioArray.map((it) => {
    const langName = it.name;
    return langColor[langName];
  });

  return (
    <PieCharts.Container>
      {loading ? (
        <LoadingModal />
      ) : (
        <PieCharts.PieChartContainer>
          {reposLanguage.length ? (
            <>
              <PieCharts.Wrapper>
                <PieCharts.Heading>
                  <PieCharts.Title>사용 언어 비율</PieCharts.Title>
                  <PieCharts.Description>
                    전체 레포 기준 (상위 5개)
                  </PieCharts.Description>
                </PieCharts.Heading>
                <PieCharts.RatioWrapper>
                  {codeRatioArray &&
                    codeRatioArray.map((it, idx) => (
                      <PieCharts.LangColorBoxWrapper
                        key={`${it.name}-${it.value}`}
                      >
                        <PieCharts.LangColorBox idx={COLORS[idx]} />
                        <div>
                          <PieCharts.LangText>{it.value}%</PieCharts.LangText>
                          <PieCharts.LangText>{it.name}</PieCharts.LangText>
                        </div>
                      </PieCharts.LangColorBoxWrapper>
                    ))}
                </PieCharts.RatioWrapper>
              </PieCharts.Wrapper>

              <PieCharts.PieWrapper>
                {codeRatioArray && (
                  <PieChart width={200} height={200}>
                    <Pie
                      data={codeRatioArray}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={70}
                      fill="#8884d8"
                      dataKey="value"
                      isAnimationActive={false}
                    >
                      {codeRatioArray.map((it, index) => (
                        <Cell
                          key={`cell-${it.name}-${it.value}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                  </PieChart>
                )}
              </PieCharts.PieWrapper>
            </>
          ) : (
            <PieCharts.NoData>데이터가 없습니다.</PieCharts.NoData>
          )}
        </PieCharts.PieChartContainer>
      )}
    </PieCharts.Container>
  );
}

PieChartComponent.propTypes = {
  reposLanguage: PropTypes.arrayOf(
    PropTypes.shape({
      language: PropTypes.string.isRequired,
      repo: PropTypes.string.isRequired,
    }),
  ),
  loading: PropTypes.bool.isRequired,
};

PieChartComponent.defaultProps = {
  reposLanguage: [],
};

export default React.memo(PieChartComponent);
