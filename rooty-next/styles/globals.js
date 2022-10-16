import styled from 'styled-components'

export const FlexBox = styled.div`
    display:flex;
    justify-content:${props=>props.justifyContent || "center"};
    align-items:${props=>props.alignItems || "center"};
    flex-direction:${props=>props.dir || "row"};
    flex-wrap: ${props=>props.flexWrap};
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: ${props=>props.bgColor};
    padding: ${props=>props.padding};
    margin: ${props=>props.margin || "0px"};
    background-image: ${props=>props.linearGradient}, url(${props=>props.bgImage});
    background-position: ${props=>props.bgPosition || "center"};
    background-size: ${props=>props.bgPosition || "cover"};
    border-radius:${props=>props.borderRadius};
    filter: ${props=>props.filter};
    border: ${props=>props.border};
    z-index:${props=>props.zIndex};
    position: ${props=>props.position};
    top: ${props=>props.top};
    left:${props=>props.left};
    
`

export const Wrapper = styled(FlexBox) `
    width: 100vw;
    height: ${props=>props.height} || "fit-content";
    padding:0px 0px 55px 0px
`

export const HorizontalScrollContainer = styled(FlexBox)`
    overflow-y: scroll;
    width: 100vw;
    scrollbar-width: none;
`

export const ImgPlaceholder = styled.div`
    width: ${props=>props.width || "134px"};
    height: ${props=>props.height || "154px"};
    border-radius: ${props=>props.borderRadius || "8px Opx Opx 8px"};
    background-image: url(${props=>props.bgImage});
    margin: ${props=>props.margin};
    background-position: center;
    background-size: cover;
`