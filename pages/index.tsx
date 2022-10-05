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

import RouteModal from '../components/Modal/RouteModal'
import ImageDetail from '../components/Modal/ImageDetail'

interface Props {
  paintings: Painting[];
}

const Home = ({ paintings }: Props) => {
  let router = useRouter();

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
          
          <div className="art-list-renderer">
              <ol>
                  {paintings.map((painting) => (
                  <li key={painting._id} className="art">
                      <Link href={`/?image=${painting.image && urlFor(painting.image).url()!}`} as={`/paintings/${painting.slug.current}`} scroll={false}>
                          <a className="#">
                              <div className="art-image">
                                  <div className="thumbnail-base">
                                      <div className="thumbnail-placeholder">
                                          <img src={painting.image && urlFor(painting.image).url()!} alt = {painting.alt} />
                                      </div>
                                  </div>
                              </div>
                              <div className="art-content">
                                <div className="art-title">
                                  <span className="title-text">
                                    {painting.title}
                                  </span>
                                </div>
                              </div>
                          </a>
                      </Link>
                  </li>
                  ))}

              </ol>
          
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
