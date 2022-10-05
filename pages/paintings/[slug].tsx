import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { sanityClient, urlFor } from "../../sanity";
import { Painting } from '../../typings';
import { GetStaticProps } from 'next'
import groq from 'groq'

interface Props {
  painting: Painting;
}

const Painting = ({ painting }: Props) => {
  return (
    <>
      <section>
        <div className="container container-fluid container-1260">
            <div className="image-portrait">
                <img src={painting.image && urlFor(painting.image).url()!} alt = {painting.alt} />
            </div>
        </div>
      </section>
    </>
  )
}

export default Painting


export const getStaticPaths = async () => {
  const query = `*[_type == "painting"]{
      _id,
      slug {
        current
      },
  }`;

  const paintings = await sanityClient.fetch(query);

  const paths = paintings.map((painting: Painting) => ({
      params: {
        slug: painting.slug.current,
      },
  }));

  return {
      paths,
      fallback: 'blocking',
  };
};


// Called during build time
// Provides props to page
// Generates static page

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "painting" && slug.current == $slug][0]{
        _id,
        title,
        description,
        image,
        slug,
        alt,
    }`

    const painting = await sanityClient.fetch(query, {
        slug: params?.slug,
    });

    if (!painting) {
        return {    
            notFound:true
        }
    }

    return {
        props: {
            painting,
        },
        revalidate: 60, // after 60 seconds, update cache version

    }
}
