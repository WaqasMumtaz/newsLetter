import styled from "styled-components";
// Modal.css.js
const SlidingPane = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  z-index: 2000;
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      default:
        return "480";
    }
  }}px;
  z-index: 2000;
    width: 364px;
    margin-top: 60px;
    margin-left: 60px;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    background-color: #141C1E;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    .box-content {
      padding: 24px;
      width: 100%;
      max-height: calc(100% - 48px);
      scroll-behavior: smooth;
      overflow-y: auto;
    }
    .box-header {
      height: 48px;
      padding: 8px 24px;
      display: flex;
      flex-direction:row
      justify-content: flex-end;
      align-items: center;
      .box-title {
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: white;
        cursor: pointer;
        &:hover {
          opacity: 0.2;
        }
      }
    }
`;
export default SlidingPane;
