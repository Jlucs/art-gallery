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
    default: 8,
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
          <div className="container container-fluid container-fluid-large">
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
              {paintings.map((painting) => (
                <Link href={`/?image=${painting.image && urlFor(painting.image).url()!}`} as={`/paintings/${painting.slug.current}`} scroll={false} key={painting._id}>
                    <a>
                        <div className="painting image-container">
                          <Image src={painting.image && urlFor(painting.image).url()!} alt = {painting.alt} className="img-fluid" layout="fill" />
                          {/* <img src="/images/test.webp"/> */}
                        </div>
                    </a>
                </Link>
              ))}
            </Masonry>
          </div>    
        </section>
        {/* <section className="conclusion">
          <div className="container container-fluid container-1280">
            <p className="text-center">For any inquiries, contact us company@example.co.uk</p>
          </div>
        </section> */}

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
