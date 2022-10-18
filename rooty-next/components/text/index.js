import styled from "styled-components"

export default function Text({
    txt='Text Here',
    size='16px',
    weight='400',
    align='left',
    color='black',
    padding='0px'
  }){
  
    return (
      <TextContain fontSize={size} fontWeight={weight} textAlign={align} textColor={color} padding={padding}>
        {txt}
      </TextContain>
    )
}

const TextContain = styled.div`
font-size:${props=>props.fontSize};
font-weight:${props=>props.fontWeight};
text-align: ${props=>props.textAlign};
color: ${props=>props.textColor};
padding: ${props=>props.padding};
line-height: normal;
`;