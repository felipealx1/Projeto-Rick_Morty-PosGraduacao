import React from "react";
import styled from "styled-components";
import { Card } from "antd";
import { IEpisode } from "../../types/episode";

interface EpisodeCardProps extends IEpisode {}

const CardWrapper = styled(Card)`
  margin: 2rem;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const EpisodeCard: React.FC<EpisodeCardProps> = ({ id, name, air_date, episode }) => {
  return (
    <CardWrapper key={id} title={name} bordered={false} style={{ width: 300 }}>
      <div>Data de Exibição: {air_date}</div>
      <div>Episódio: {episode}</div>
    </CardWrapper>
  );
};

export default EpisodeCard;
