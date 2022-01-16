import styled from "styled-components";

export const Item = styled.div`
    /* overflow-x: auto;
    -webkit-overflow-scrolling: touch; */
    display:block;
    width:10rem;
    margin-top: .2963rem
    height:2.1574rem /* 233/108 */;
    /* padding-top: .73rem; */
    justify-content: space-between;
    /* align-items: center; */
    & .homeservice-item-more{
        margin-left: 15px;
        text-align: left;
        display: flex;
    }
      & .homeservice-img__box-more {
            width: 150px;
            height: 150px;
            margin: 20px 0 0 -10px;
            /* text-align:center */
            /* height: 100%; */
            /* margin:.3rem .3rem .2rem .3rem; */
      }
      & .more-book-text {
          margin: 20px 0 0 20px;
          flex: 1;
          font-size: 17px;
          border-bottom: 1px solid #999;
      }
        & .homeservice-img-more{
            width: 100%;
            height: 100%;
        }
        & .homeservice-text-more{
        /* text-align:center */
        margin-top: 20px;
        width:100%;
        height: .287rem
        font-size: .287rem /* 31/108 */;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        }
        & .homeservice-author-more{
          /* text-align:center; */
          color: #999;
          padding: 20px 0;
          /* overflow:hidden;
          text-overflow:ellipsis;
          white-space:nowrap; */
        }
        & .homeservice-price-more{
          /* text-align:center; */
          padding-top: 15px;
          padding-bottom: 10px;
          color: red;
        }
`;