import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award wining digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur ducimus numquam vero inventore itaque molestias optio
            tempora! Natus quam illo dolor,
            <br />
            <br />
            eligendi nostrum iure voluptatibus ducimus accusamus dolorem cum
            laboriosam odit repudiandae in culpa dolorum cumque numquam
            voluptates perferendis, maxime dolores architecto? Cupiditate, quasi
            autem fuga quae expedita doloremque pariatur iusto maxime assumenda
            cumque eius!
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis sequi explicabo libero dolore sapiente voluptates sed, voluptas nisi, quasi, accusamus similique praesentium facilis tempore nulla?
            <br />
            <br /> - Dynamic Websites
            <br />
            <br />
             - Fast and Handy
             <br />
             <br />
             - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
