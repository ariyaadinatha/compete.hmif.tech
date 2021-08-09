import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Footer from '../components/footer';
import HomeContent from '../components/home-content';
import CONSTANTS from '../constants';
import { MdExplore } from 'react-icons/md';

const HomeLayout = () => {
  const {competitions, homeContents} = CONSTANTS;
  return (
    <>
      <div className='bg-black min-h-screen'>
        <Header siteTitle={'Competition and Community HMIF'} />
        {homeContents.map(({title, description, logo}) => {
          return <HomeContent title={title} description={description} logo={logo}/>
        })}
        <div className='container mx-auto pt-5 px-10 md:py-10'>
          <div className='text-xl flex flex-row justify-center items-center font-bold font-heading text-center text-cnc-yellow'>
            <MdExplore className='mr-2'/> Eksplorasi bidang-bidang ini! <MdExplore className='ml-2'/>
          </div>
          <div className='flex flex-col md:flex-row justify-between py-3'>
            {competitions.map(({link, displayName, icon}) => {
              return (
                <Link
                  to={link}
                  key={displayName}
                  className='hover-no-underline'
                >
                  <div className='flex flex-col items-center p-6 cursor-pointer'>
                    <div>{icon}</div>
                    <div className='text-hmif-yellow font-sans font-bold text-center text-lg'>
                      {displayName}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeLayout;
