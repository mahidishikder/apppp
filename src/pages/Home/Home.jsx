import React from 'react';
import Banner from '../../components/Banner/Banner';
import Review from '../../components/Review/Review';
import OurTeam from '../../components/OurTeam/OurTeam';
import Download from '../../components/Download/Download';
import Video from '../../components/Video/Video';


function Home() {
  return (
    <div >
      <div>

      <Banner />
      </div>
      <Review />
      <OurTeam />
      <Download />
      <Video></Video>
      <div>
      <div>
      <section id="home" >
       
      </section>
      <section id="download" >
        
      </section>
      <section id="review">
        
      </section>
    </div>
      </div>
    </div>
  );
}

export default Home;
