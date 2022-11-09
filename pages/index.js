import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../source/components/CSSReset";
import Menu  from "../source/components/Menu";
import {StyledTimeline} from "../source/components/Timeline";

function HomePage() {
  // const estilosDaHomePage = { 
  //   //   backgroundColor: "red" 
  //   };

  // //   console.log(config.playlists);

  return (
    <>
    <CSSReset/>
      <div>
        <Menu/>
        <Header/>
        <Timeline playlists={config.playlists}>
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

function Header() {
  return (
    <StyledHeader>
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

function Timeline(props) {
  //   console.log(props, "dentro do componente");
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
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
