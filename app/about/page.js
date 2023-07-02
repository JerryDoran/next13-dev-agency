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
          className='object-cover grayscale'
        />
        <div className='absolute bottom-[20px] left-[20px] bg-[#53c28b] p-2 text-white/90'>
          <h1 className='text-3xl'>Digital Storytellers</h1>
          <h2 className='text-xl'>
            Handcrafting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className='flex gap-20'>
        <div className='flex-1 mt-10 flex flex-col gap-8'>
          <h1 className='text-3xl font-bold'>Who we are</h1>
          <p className='text-lg text-justify'>
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
        <div className='flex-1 mt-10 flex flex-col gap-8'>
          <h1 className='text-3xl font-bold'>What we do</h1>
          <p className='text-lg text-justify'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            perspiciatis ex, aspernatur dolor eius nesciunt, qui quas
            architecto, assumenda quam eligendi iste ea aut tempore id
            asperiores mollitia excepturi fugiat odit neque accusamus tenetur!
            Hic, molestiae
            <br />
            <br />- Dynamic Websites
            <br />
            <br />- Fast and Responive Mobile Apps
            <br />
            <br />- Excellent Reliability
          </p>
          <Button url='/contact' text='Contact' />
        </div>
      </div>
    </section>
  );
}
