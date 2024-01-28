import { AboutContainer, Photo, TextContainer, Text, PhotoContainer, Hello, Buttons, LinkedinB, GithubB } from "./AboutMe-style"
import Foto from '../../../../assets/imgperfil.png'
import rough from "roughjs";
import { RefObject, useEffect, useRef } from "react";


export function RoughLine({ filled = true }: { filled?: boolean }) {
  let ref: RefObject<SVGSVGElement> = useRef(null);

  useEffect(() => {
    let svg = ref.current;
    if (svg === null) {
      return;
    }
    let rc = rough.svg(svg);
    svg.appendChild(
      rc.line(2, 24, 10000, 24, {
        fill: filled ? "blue" : undefined,
        stroke: 'red',
        fillWeight: 0.1,
        strokeWidth: 0.7,
        roughness: 2,
      })
    );

    return () => {
      svg!.innerHTML = "";
    };
  }, [filled]);

  return <svg ref={ref} style={{ height: "100px", width: "260px", position:"absolute"}} />;
}


function AboutMe() {
    return(
        <AboutContainer id='about'>
            <PhotoContainer>
                <Photo src={Foto}/>
            </PhotoContainer>
            <TextContainer>
                <Hello>Olá! Me chamo Gabrielle Oliveira e sou desenvolvedora.</Hello>
                <Text>
                    Atualmente, faço o meu bacharel em Engenharia de Computação na Universidade do Estado 
                    do Rio de Janeiro. Trabalho com desenvolvimento Web e de 
                    aplicativos e busco uma oportunidade de emprego para enriquecer a minha jornada profissional.
                </Text>
            <Buttons>
                <LinkedinB href='https://www.linkedin.com/in/gabriellefoliv' target='_blank'>Ver Linkedin</LinkedinB>
                <GithubB href='https://www.github.com/gabriellefoliv' target='_blank'>Ver Github</GithubB>
            </Buttons>
            </TextContainer>
        </AboutContainer>
    )
}

export default AboutMe