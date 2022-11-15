import React from "react";
import config from "../config.json";
import styled from "styled-components";
import Menu from "../source/components/Menu/";
import { StyledTimeline } from "../source/components/Timeline";
import { videoService } from "../source/services/videoService";

function HomePage() {
  const service = videoService();
  const [valorFiltro, setValorFiltro] = React.useState("");
  const [playlists, setPlayLists] = React.useState({});

  React.useEffect(() => {
    service.getAllVideos().then((dados) => {
      const novasPlaylists = { ...playlists };
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist]) {
          novasPlaylists[video.playlist] = [];
        }
        novasPlaylists[video.playlist].push(video);
      });
      setPlayLists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div>
        <Menu valorFiltro={valorFiltro} setValorFiltro={setValorFiltro} />
        <Header />
        <Timeline searchValue={valorFiltro} playlists={config.playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}
export default HomePage;

const StyledHeader = styled.div`
  background-color: ${({ theme }) => theme.backgroundLevel1};

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
      <StyledBanner />
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

function Timeline({ searchValue, ...props }) {
  //   console.log(props, "dentro do componente");
  const playlistNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlistNames.map((playlistName) => {
        const videos = props.playlists[playlistName];
        // console.log(videos);
        return (
          <section key={playlistName}>
            <h2>{playlistName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
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
