import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
import Menu  from "../source/components/Menu/"
import {StyledTimeline} from "../source/components/Timeline";

function HomePage() {
  // const estilosDaHomePage = { 
  //   //   backgroundColor: "red" 
  //   };
  const [valorFiltro, setValorFiltro] = React.useState('')


  return (
    <>
    <CSSReset/>
      <div>
        <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro}/>
        <Header/>
        <Timeline searchValue={valorFiltro} playlists={config.playlists}>
            Conteúdo
        </Timeline>    
      </div>
      </>
  );
}
export default HomePage;

// function Menu() {
//   return <div>Menu</div>;
// }

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
const StyledBanner = styled.div`
  background-color: blue;
  background-image: url(${config.bg});
  height: 230px;
`;

function Header() {
  return (
    <StyledHeader>
      <StyledBanner/>
      {/* <img src="banner" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline({searchValue, ...props}) {
  //   console.log(props, "dentro do componente");
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(videos);
        return (
          <section key={playlistName} >
            <h2>{playlistName}</h2>
            <div>
              {videos.filter((video) => {
                const titleNormalized = video.title.toLowerCase();
                const searchValueNormalized = searchValue.toLowerCase();
                return titleNormalized.includes(searchValueNormalized)
              }).map((video) => {
                return (
                  <a  key={video.url} href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
