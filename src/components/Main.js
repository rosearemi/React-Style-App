import React from 'react';
import styled from 'styled-components';

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;
  const CardBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const CardStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr;
    border: 1px solid rgb(212, 210, 210);
    border-radius: 6px;
    box-shadow: 0 0 3px 0 rgb(172, 170, 170);
  `;

  const CardContentStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 600;
    margin: 0 0 0 10px;
  `;

  const CardImage1 = styled.image`
    background-image: url(/images/card1.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage2 = styled.image`
    background-image: url(/images/card2.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage3 = styled.image`
    background-image: url(/images/card3.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;
  const CardImage4 = styled.image`
    background-image: url(/images/card4.jpg);
    height: 70px;
    background-size: 100% 100%;
  `;

  const SectionTitle = styled.div`
    padding: 10px 0px;
    font-size: 30px;
    font-weight: 800;
    color: rgb(70, 70, 70);
  `;

  const Section2Style = styled.div`
    border-radius: 20px;
    margin: 40px 0;
    background-image: url(images/ad1.jpg);
    height: 350px;
    background-size: 100% 100%;
  `;
  const section = styled.section`
    margin: 30px 0;
  `;

  const ChooBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const ChooImage1 = styled.div`
    background-image: url('../images/choo1.png');
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage2 = styled.div`
    background-image: url('../images/choo2.png');
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage3 = styled.div`
    background-image: url('../images/choo3.png');
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage4 = styled.div`
    background-image: url('../images/choo4.png');
    height: 250px;
    background-size: 100% 100%;
  `;
  const ChooImage5 = styled.div`
    background-image: url('../images/choo5.png');
    height: 250px;
    background-size: 100% 100%;
  `;

  const SecTitleStyle = styled.div`
    display: grid;
    align-items: center;
    font-weight: 300;
    font-size: 18px;
    /* margin: 0 0 0 10px; */
  `;

  const Section5Style = styled.div`
    margin: 20px 0;
    background-image: url(../images/ad2.png);
    height: 300px;
    background-size: 100% 100%;
  `;

  const HomeBoxStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
  `;

  const HomeImage1 = styled.div`
    background-image: url(/images/home1.png);
    height: 180px;
    background-size: 100% 100%;
  `;

  const HomeImage2 = styled.div`
    background-image: url(/images/home2.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage3 = styled.div`
    background-image: url(/images/home3.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage4 = styled.div`
    background-image: url(/images/home4.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage5 = styled.div`
    background-image: url(/images/home5.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage6 = styled.div`
    background-image: url(/images/home6.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage7 = styled.div`
    background-image: url(/images/home7.png);
    height: 180px;
    background-size: 100% 100%;
  `;
  const HomeImage8 = styled.div`
    background-image: url(/images/home8.png);
    height: 180px;
    background-size: 100% 100%;
  `;

  const Info1 = styled.div`
    margin: 5px 0;
    font-size: 13px;
    color: gray;
  `;

  const Info2 = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: rgb(61, 60, 60);
  `;

  const StarStyle = styled.span`
    font-size: 12px;
    color: rgb(30, 119, 115);
    font-weight: 800;
  `;

  const InfoSubStyle = styled.span`
    font-size: 12px;
    margin-right: 2px;
  `;

  return (
    <MainStyle>
      <section>
        <SectionTitle>에어비앤비 둘러보기</SectionTitle>
        <CardBox>
          <CardStyle>
            <CardImage1></CardImage1>
            <CardContentStyle>숙소 및 부티크 호텔</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImage2></CardImage2>
            <CardContentStyle>트립</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImage3></CardImage3>
            <CardContentStyle>어드벤처</CardContentStyle>
          </CardStyle>
          <CardStyle>
            <CardImage4></CardImage4>
            <CardContentStyle>레스토랑</CardContentStyle>
          </CardStyle>
        </CardBox>
      </section>

      <section>
        <Section2Style></Section2Style>
      </section>

      <section>
        <SectionTitle>추천 여행지</SectionTitle>
        <ChooBoxStyle>
          <ChooImage1></ChooImage1>
          <ChooImage2></ChooImage2>
          <ChooImage3></ChooImage3>
          <ChooImage4></ChooImage4>
          <ChooImage5></ChooImage5>
        </ChooBoxStyle>
      </section>

      <section>
        <SectionTitle>에어비앤비 플러스를 만나보세요!</SectionTitle>
        <SecTitleStyle>
          퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션
        </SecTitleStyle>
        <Section5Style></Section5Style>
      </section>

      <section>
        <SectionTitle>전 세계 숙소</SectionTitle>
        <HomeBoxStyle>
          <div className="Home">
            <HomeImage1 />
            <Info1>오두막 · BALIAN BEACH, BALI</Info1>
            <Info2>BALIAN TREEHOUSE w beautiful pool</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>185</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage2 />
            <Info1>키클라데스 주택 · 이아(OIA)</Info1>
            <Info2>Unique Architecture Cave House</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>188</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage3 />
            <Info1>성 · 트웬티나인 팜스(TWENTYNINE PALMS)</Info1>
            <Info2>Tile House</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>367</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage4 />
            <Info1>검증됨 · 케이프타운</Info1>
            <Info2>
              Modern, Chic Penthouse with Mountain, City & Sea Views
            </Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>177</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage5 />
            <Info1>아파트 전체 · 마드리드(MADRID)</Info1>
            <Info2>솔광장에 위치한 개인 스튜디오</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>459</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage6 />
            <Info1>집 전체 · HUMAC</Info1>
            <Info2>Vacation house in etno-eco village Humac</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>119</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage7 />
            <Info1>개인실 · 마라케시</Info1>
            <Info2>The Cozy Palace</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>559</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>

          <div className="Home">
            <HomeImage8 />
            <Info1>게스트용 별채 전체 · 로스앤젤레스</Info1>
            <Info2>Private Pool House with Amazing Views!</Info2>
            <div className="info3">
              <StarStyle>★★★★★</StarStyle>
              <InfoSubStyle>170</InfoSubStyle>
              <InfoSubStyle> 슈퍼호스트</InfoSubStyle>
            </div>
          </div>
        </HomeBoxStyle>
      </section>
    </MainStyle>
  );
};

export default Main;
