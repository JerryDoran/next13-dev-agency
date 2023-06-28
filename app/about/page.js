import Button from '@/components/Button';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <section>
      <div className='relative w-full h-[300px]'>
        <Image
          fill={true}
          src='https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
          alt='meeting'
          className='object-cover'
        />
        <div className=''>
          <h1 className=''>Digital Storytellers</h1>
          <h2 className=''>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className=''>
        <div className=''>
          <div className=''>
            <h1 className=''>Who we are</h1>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              perspiciatis ex, aspernatur dolor eius nesciunt, qui quas
              architecto, assumenda quam eligendi iste ea aut tempore id
              asperiores mollitia excepturi fugiat odit neque accusamus tenetur!
              Hic, molestiae
              <br />
              <br />
              fugit error rerum sapiente blanditiis quis, distinctio sed saepe
              possimus repellat aperiam dignissimos esse, assumenda itaque?
              Laboriosam laudantium ratione magnam cupiditate quae eius
              voluptates.
            </p>
          </div>
          <div className=''>
            <h1 className=''>What we do</h1>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              perspiciatis ex, aspernatur dolor eius nesciunt, qui quas
              architecto, assumenda quam eligendi iste ea aut tempore id
              asperiores mollitia excepturi fugiat odit neque accusamus tenetur!
              Hic, molestiae
              <br />- Dynamic Websites - Fast and Responive Mobile Apps -
              Excellent Reliability
            </p>
            <Button url='/contact' text='Contact' />
          </div>
        </div>
      </div>
    </section>
  );
}
