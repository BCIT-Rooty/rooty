import styled from 'styled-components';

export const FlexBox = styled.div`
display:flex;
justify-content:${props=>props.justifyContent || "center"};
align-items:${props=>props.alignItems || "center"};
flex-direction:${props=>props.dir || "row"};
flex-wrap: ${props=>props.flexWrap};
width: ${props=>props.width};
height: ${props=>props.height};
min-height: ${props=>props.minHeight};
background-color: ${props=>props.color};
padding: ${props=>props.padding};
margin: ${props=>props.margin};
background-image: url(${props=>props.bgImage});
background-position: ${props=>props.bgPosition || "center"};
background-size: ${props=>props.bgPosition || "cover"};
border-radius: ${props=>props.borderRadius};
filter: ${props=>props.filter};
border: ${props=>props.border};
`

export const Wrapper = styled(FlexBox)`
width:100vw;
height:100vh;
`

export const ImgPlaceholder = styled.div`
width: ${props=>props.width || "134px"};
height: ${props=>props.height || "154px"};
margin: ${props=>props.margin};
border-radius: ${props=>props.borderRadius || "8px 0px 0px 8px"};
background-image: url(${props=>props.bgImage});
background-position: center;
background-size: cover;
`