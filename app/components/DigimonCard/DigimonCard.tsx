import { Card, Title, Image } from '@mantine/core';

import { Digimon } from '~/types';

type Props = {
  digimon: Digimon;
};

const DigimonCard = (props: Props) => {
  const { digimon } = props;

  return (
    <Card shadow="md" p="lg">
      <Card.Section>
        <Image height={250} src={digimon.img} alt={digimon.name} />
      </Card.Section>

      <Title align="center" order={3} style={{ marginTop: '1rem' }}>
        {digimon.name}
      </Title>
    </Card>
  );
};

export default DigimonCard;
