import styled from "styled-components";

export const Tab = styled.div`
    height: 5.137rem /* 382/108 */;
    width: 9.3611rem /* 1011/108 */;
    background-color: #fff;
    border-radius:10px;
    box-sizing: border-box;
    padding: .5093rem /* 55/108 */ .3333rem /* 36/108 */ .4537rem /* 49/108 */ .2963rem /* 32/108 */;
 
`;
export const Top = styled.div`
    display:flex;
    justify-content:space-between;
    height: .4259rem /* 46/108 */;
    width: 100%; 
      & .homeservice-left {
      display:flex;
      align-items: center;
      justify-content:space-between;
      width: 3.2407rem /* 350/108 */;
      }
    & .homeservice-title {
      width: 1.8rem /* 182/108 */;
      font-weight:bold;
      font-size: .4259rem /* 46/108 */;
      font-family: PingFangSC-medium;
      font-weight: bold;
    }
    /* & .homeservice-tag{
      width: 1.3981rem /* 151/108 */;
      /* border-radius: 30px;
      background-color: #fe4e4b;
      color:#fee9e6;
      font-size: .2778rem /* 30/108 */;
      /* text-align:center;
    }
    & .homeservice-slogan{
      width: 3.6759rem /* 289/108 */;
      /* color: #868c9b;
      height: .287rem /* 31/108 */;
    /* }  */
`;
export const Item = styled.ul`
    /* overflow-x: auto;
    -webkit-overflow-scrolling: touch; */
    display:flex;
    width:10rem;
    margin-top: .2963rem
    height: 2.1574rem /* 233/108 */;
    padding-top: .23rem;
    justify-content: space-between;
    align-items: center;
    & .homeservice-item{
        /* margin-left: 15px;
        display: inline-block; */
        /* flex:1; */
        margin-left: 15px;
        width: 4.835rem;
        height: 4.243rem
    }
      & .homeservice-img__box {
            width: 100%;
            text-align:center
            /* height: 100%; */
            margin:.3rem .3rem .2rem .3rem;
      }
        & .homeservice-img{
            /* width: 100%;
            height: 100%; */
        }
        & .homeservice-text{
        /* text-align:center */
        width:2.3333rem;
        height: .287rem
        font-size: .287rem /* 31/108 */;
        text-align:center;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        }
        & .homeservice-author{
          /* text-align:center; */
          color: #999;
        }
        & .homeservice-price{
          /* text-align:center; */
          color: red;
        }
`;