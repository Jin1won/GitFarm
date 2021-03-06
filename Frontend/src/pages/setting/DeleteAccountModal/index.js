import React from "react";
import { useNavigate } from "react-router-dom";
import * as api from "@/api";
import Modal from "@/components/Modal";
import Description from "@/components/Description";
import SadIcon from "@/assets/icon/sad-face.svg";
import PropTypes from "prop-types";
import { Wrapper } from "./style";

function DeleteAccountModal({ setOpenModal }) {
  const navigate = useNavigate();

  const deleteAccountHandler = async () => {
    const res = await api.deleteAccount();
    if (res.status === 201) {
      navigate("/");
    } else {
      alert("탈퇴 실패~~!");
    }
  };

  return (
    <Modal
      setOpenModal={setOpenModal}
      title="GitFarm 탈퇴하기"
      deleteAccountHandler={deleteAccountHandler}
      twoBtn
    >
      <Wrapper>
        <Description>
          GitFarm 내의 모든 정보를 삭제하고
          <br />
          정말로 탈퇴하시겠습니까? <br />
          사라진 계정 정보는 복구할 수 없습니다.
        </Description>
        <SadIcon />
      </Wrapper>
    </Modal>
  );
}
DeleteAccountModal.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
export default DeleteAccountModal;
