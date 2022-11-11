import type { GetStaticProps, NextPage } from 'next'
import { Menu, Transition, Dialog } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { sanityClient, urlFor } from "../sanity";
import { Painting, Collection, Category } from '../typings';
import { useRouter } from "next/router";
import { fetchPaintings } from '../utils/fetchPaintings'
import { fetchCategories } from '../utils/fetchCategories'
import Masonry from 'react-masonry-css'



import RouteModal from '../components/Modal/RouteModal'
import ImageDetail from '../components/Modal/ImageDetail'

interface Props {
  paintings: Painting[];
}

const Home = ({ paintings }: Props) => {
  let router = useRouter();
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };
  return (
    <>  
        {router.query.image && (
          <RouteModal
            onClose={() => {
              router.push("/", undefined, {scroll: false});
            }}
            >
            <ImageDetail image={`${router.query.image}`} />
          </RouteModal>
        )}

        <section className="gallery">
          <div className="container container-fluid container-1280">
            <div className="section-title">
                <h1 className="text-center">Explore</h1>
            </div>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {paintings.map((painting) => (
                <Link href={`/?image=${painting.image && urlFor(painting.image).url()!}`} as={`/paintings/${painting.slug.current}`} scroll={false} key={painting._id}>
                    <a>
                        <div className="painting">
                          <img src={painting.image && urlFor(painting.image).url()!} alt = {painting.alt} className="img-fluid" />
                          {/* <img src="/images/test.webp"/> */}
                        </div>
                    </a>
                </Link>
              ))}
            </Masonry>
            <div className="gallery-grid">
                <div className="row painting-row">
                    {
                    paintings.map((painting) => (
                        <div className="col-lg-3 col-md-4 col-sm-6 painting-col" key={painting._id}>
                            <Link href={`/?image=${painting.image && urlFor(painting.image).url()!}`} as={`/paintings/${painting.slug.current}`} scroll={false}>
                                <a>
                                    <div className="painting">
                                        <div className="painting-default">
                                        <img src="/images/default-portrait.svg"/>
                                          {/* {painting.imageRatio === "0" ? 
                                            <img src="/images/default-portrait.svg"/>
                                            :
                                            <img src="/images/default-square.svg"/>
                                          } */}
                                        </div>
                                        <div className="painting-image">
                                            <img src="/images/test.webp"/>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                      ))}
                </div>
            </div>
          </div>    
        </section>

    </>
  )
}

export default Home

export const getStaticProps = async () => {  
  const query = `*[_type == "painting"]`;

  const paintings = await sanityClient.fetch(query);

  return {
    props: {
      paintings,
    },
  };

};
