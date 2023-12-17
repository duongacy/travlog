'use client'
import { EnvelopeIcon, PlayCircleIcon, StarIcon } from '@heroicons/react/20/solid';
import { ArrowLeftIcon, ArrowRightIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function page() {
  return (
    <div>
      <Image
        src="/ellipse1.svg"
        width={500}
        height={500}
        className='absolute left-0 top-0 z-50'
        alt="Screenshots of the dashboard project showing desktop version"
      />
      <div className='fixed top-0 w-full bg-white z-40'>
        <Menu className='container' />
      </div>
      <Introduce className='container mt-112px' />
      <div className='relative'>
        <Image
          src="/ellipse2.svg"
          width={500}
          height={500}
          className='absolute right-0 h-500px z-50 top-1/2 -translate-y-1/2'
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Parner className='container' />
      </div>
      <Service className='container' />
      <TopDestination className='container' />
      <TravelPoint className='container' />
      <KeyFeatures className='container' />

      <div className='relative'>
        <Image
          src="/Layer_1.svg"
          width={2506}
          height={958}
          className='absolute -top-[70%] left-0 right-0'
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <Testimonials className='container' />
      </div>
      <Subscribe className='container' />
      <Footer className='container' />
    </div>
  );
}

function Menu(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='h-114px flex justify-between items-center'>
      <button className='w-48px aspect-square relative hidden laptop:block desktop:hidden'>
        <Image src={'/hambuger.svg'} fill alt='' />
      </button>
      <div className='gap-16px flex items-center'>
        <div className='w-40px aspect-square shrink-0 relative rounded-full'>
          <Image src={'/logo.svg'} fill alt='' />
        </div>
        <span className='text-[24px] font-black'>Travlog</span>
      </div>
      <ul className=' gap-64px h-16px font-bold text-[14px] text-gray-500 hidden desktop:flex'>
        <li className='text-gray-700'>Home</li>
        <li>Discover</li>
        <li>Special Deals</li>
        <li>Contact</li>
      </ul>
      <div className='hidden laptop:block'>
        <button className='h-50px w-106px font-bold text-[14px]'>Login</button>
        <button className='h-50px w-116px bg-violet-500 rounded-full font-bold text-white text-[14px]'>Signup</button>
      </div>
      <button className='w-48px aspect-square relative laptop:hidden'>
        <Image src={'/hambuger.svg'} fill alt='' />
      </button>
    </div>
  </div>
}

function Introduce(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='flex flex-col gap-y-32px laptop:py-64px py-32px desktop:flex-row-reverse desktop:items-center'>
      <div className='aspect-square relative w-full max-w-772px mx-auto duration-300'>
        <Image src={'/trav-01.svg'} fill alt='' />
      </div>
      <div className='flex gap-42px flex-col items-center text-center desktop:max-w-412px desktop:items-start desktop:text-start'>
        <button className='gap-16px px-32px py-16px flex items-center shadow-sm w-fit rounded-full text-[#F85E9F]'>
          <span className='text-[14px] font-semibold '>Explore the world!</span>
          <BriefcaseIcon fill='#F85E9F' className='w-24px' />
        </button>
        <div className='font-bold text-[70px] leading-[120%]'>Travel <span className='text-[#F85E9F]'>top destination</span>
          {' '} of the world</div>
        <p className='text-[18px] text-gray-600'>We always make our customer happy by providing <br />
          as many choices as possible </p>
        <div className='flex gap-16px flex-col laptop:flex-row w-full laptop:w-fit'>
          <button className='h-50px px-32px bg-violet-500 rounded-full font-bold text-white text-[14px]'>Get Started</button>
          <button className='h-56px border border-gray-400 rounded-full font-bold text-[14px] gap-8px flex justify-center items-center px-32px'>
            <PlayCircleIcon className='text-violet-500' width={24} />
            <span >Watch Demo</span>
          </button>
        </div>
      </div>
    </div>
  </div>
}

function Parner(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <Image width={64} height={64} src={'/service_01.svg'} alt='' />
    <div className='py-32px flex justify-center flex-wrap gap-x-28px gap-y-38px'>
      <Image width={132} height={20} src={'/partner_01.svg'} alt='' />
      <Image width={70} height={20} src={'/partner_03.svg'} alt='' />
      <Image width={118} height={20} src={'/partner_02.svg'} alt='' />
      <Image width={64} height={20} src={'/partner_04.svg'} alt='' />
      <Image width={106} height={20} src={'/partner_05.svg'} alt='' />
    </div>
  </div>
}

function Service(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='flex py-32px laptop:py-64px gap-y-32px laptop:gap-y-64px flex-col desktop:flex-row desktop:items-center overflow-x-hidden'>
      <div className='flex flex-col text-center min-w-444px desktop:text-start'>
        <p className='text-[24px] text-[#F85E9F] uppercase font-bold'>Services</p>
        <p className='text-[40px] font-bold'>Our top value categories for you</p>
      </div>
      <div className='flex flex-col gap-16px laptop:flex-row overflow-x-auto pb-16px'>
        <div className='border p-32px flex flex-col gap-y-32px rounded-32px text-center items-center desktop:min-w-444px' >
          <Image width={64} height={64} src={'/service_01.svg'} alt='' />
          <div className='flex flex-col gap-32px'>
            <p className='text-[24px] font-bold'>Weather Forecast</p>
            <p className='text-[18px] text-gray-500'>What looked like a small patch of purple grass, above five feet.</p>
          </div>
        </div>
        <div className='border p-32px flex flex-col gap-y-32px rounded-32px text-center items-center desktop:min-w-444px' >
          <Image width={64} height={64} src={'/service_02.svg'} alt='' />
          <div className='flex flex-col gap-32px'>
            <p className='text-[24px] font-bold'>Easy Booking</p>
            <p className='text-[18px] text-gray-500'>Square, was moving across the sand in their direction.</p>
          </div>
        </div>
        <div className='border p-32px flex flex-col gap-y-32px rounded-32px text-center items-center desktop:min-w-444px' >
          <Image width={64} height={64} src={'/service_03.svg'} alt='' />
          <div className='flex flex-col gap-32px'>
            <p className='text-[24px] font-bold'>Best Tour Guide</p>
            <p className='text-[18px] text-gray-500'>What looked like a small patch of purple grass, above five feet.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}

function TopDestination(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='flex flex-col gap-y-32px py-32px overflow-x-hidden laptop:py-64px'>
      <div className='gap-y-32px flex flex-col text-center laptop:items-center desktop:flex-row desktop:text-start'>
        <div className='flex flex-col gap-y-16px laptop:flex-auto'>
          <p className='text-[24px] font-bold uppercase text-[#F85E9F] leading-[120%]'>Top Destination</p>
          <p className='text-[44px] font-bold leading-[120%]'>Explore top destination</p>
        </div>
        <div className='flex justify-between gap-x-32px'>
          <div className='w-100px aspect-square rounded-full grid place-content-center border border-gray-300'>
            <ArrowLeftIcon width={24} />
          </div>
          <div className='w-100px aspect-square rounded-full text-white bg-violet-500 grid place-content-center'>
            <ArrowRightIcon width={24} />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-32px laptop:flex-row laptop:overflow-x-auto py-4'>
        <div className='rounded-32px overflow-hidden shadow-sm min-w-444px'>
          <div className='aspect-[398/314] bg-yellow-50 relative'>
            <Image fill className='object-cover' src={'/destination_01.svg'} alt='' />
          </div>
          <div className='flex flex-col gap-y-32px p-32px'>
            <div className='flex flex-col gap-16px'>
              <div className='flex flex-col gap-8px'>
                <p className='text-[24px] font-bold text-[#F85E9F]'>$550.16</p>
                <p className='text-[24px] font-bold'>Paradise Beach, Bantayan Island</p>
              </div>
              <p className='text-[18px] text-gray-500'>Rome, Italy</p>
            </div>
            <div className='flex gap-x-8px items-center text-orange-600'>
              <p className='font-bold  text-[24px] leading-[120%]'>4.8</p>
              <StarIcon width={24} />
            </div>
          </div>
        </div>
        <div className='rounded-32px overflow-hidden shadow-sm min-w-444px'>
          <div className='aspect-[398/314] bg-yellow-50 relative'>
            <Image fill className='object-cover' src={'/destination_02.svg'} alt='' />
          </div>
          <div className='flex flex-col gap-y-32px p-32px'>
            <div className='flex flex-col gap-16px'>
              <div className='flex flex-col gap-8px'>
                <p className='text-[24px] font-bold text-[#F85E9F]'>$550.16</p>
                <p className='text-[24px] font-bold'>Paradise Beach, Bantayan Island</p>
              </div>
              <p className='text-[18px] text-gray-500'>Rome, Italy</p>
            </div>
            <div className='flex gap-x-8px items-center text-orange-600'>
              <p className='font-bold  text-[24px] leading-[120%]'>4.8</p>
              <StarIcon width={24} />
            </div>
          </div>
        </div>
        <div className='rounded-32px overflow-hidden shadow-sm min-w-444px'>
          <div className='aspect-[398/314] bg-yellow-50 relative'>
            <Image fill className='object-cover' src={'/destination_03.svg'} alt='' />
          </div>
          <div className='flex flex-col gap-y-32px p-32px'>
            <div className='flex flex-col gap-16px'>
              <div className='flex flex-col gap-8px'>
                <p className='text-[24px] font-bold text-[#F85E9F]'>$550.16</p>
                <p className='text-[24px] font-bold'>Paradise Beach, Bantayan Island</p>
              </div>
              <p className='text-[18px] text-gray-500'>Rome, Italy</p>
            </div>
            <div className='flex gap-x-8px items-center text-orange-600'>
              <p className='font-bold  text-[24px] leading-[120%]'>4.8</p>
              <StarIcon width={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

}

function TravelPoint(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='py-32px gap-y-64px flex flex-col desktop:flex-row laptop:py-64px'>
      <div className='aspect-[398/318] desktop:h-698px desktop:-ml-128px relative flex-auto'>
        <Image fill src={'/travel-point.svg'} alt='' />
      </div>
      <div className='gap-32px flex flex-col desktop:self-end'>
        <div className='gap-32px grid text-center desktop:text-start'>
          <div className='grid gap-16px'>
            <p className='text-[24px] font-bold uppercase text-[#F85E9F] leading-[120%]'>Travel Point</p>
            <p className='text-[44px] font-bold leading-[120%]'>We helping you find your dream location</p>
          </div>
          <p className='text-[16px] leading-[160%] text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>

        <div className='grid laptop:grid-cols-2 desktop:grid-cols-2 gap-16px'>
          <div className='rounded-32px  border border-gray-400 p-32px grid gap-16px text-center'>
            <p className='text-[36px] text-[#FF5722] font-bold leading-[120%]'>500+</p>
            <p className='text-[18px] leading-[160%]'>Holiday Package</p>
          </div>
          <div className='rounded-32px  border border-gray-400 p-32px grid gap-16px text-center'>
            <p className='text-[36px] text-[#FF5722] font-bold leading-[120%]'>100</p>
            <p className='text-[18px] leading-[160%]'>Luxury Hotel</p>
          </div>
          <div className='rounded-32px  border border-gray-400 p-32px grid gap-16px text-center'>
            <p className='text-[36px] text-[#FF5722] font-bold leading-[120%]'>7</p>
            <p className='text-[18px] leading-[160%]'>Premium Airlines</p>
          </div>
          <div className='rounded-32px  border border-gray-400 p-32px grid gap-16px text-center'>
            <p className='text-[36px] text-[#FF5722] font-bold leading-[120%]'>2k+</p>
            <p className='text-[18px] leading-[160%]'>Happy Customer</p>
          </div>
        </div>

      </div>
    </div>
  </div>
}

function KeyFeatures(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='p-32px desktop:py-64px flex flex-col gap-y-64px desktop:flex-row-reverse desktop:gap-x-70px'>
      <div className='aspect-[350/438] desktop:min-h-692px  desktop:-mr-128px relative'>
        <Image fill src={'/key-feature.svg'} alt='' />
      </div>

      <div className='gap-32px flex flex-col '>
        <div className='gap-32px grid text-center'>
          <div className='grid gap-16px'>
            <p className='text-[24px] font-bold uppercase text-[#F85E9F] leading-[120%]'>Key features</p>
            <p className='text-[44px] font-bold leading-[120%]'>We offer best services</p>
          </div>
          <p className='text-[16px] leading-[160%] text-gray-500'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
        </div>

        <div className='flex flex-col gap-8px'>
          <div className='p-32px gap-32px laptop:items-center laptop:flex-row flex flex-col border-transparent border duration-300 hover:border-gray-400'>
            <Image width={100} height={100} src={'/location-icon.svg'} alt='' />
            <div>
              <p className='font-bold text-[24px] leading-[120%]'>We offer best services</p>
              <p className='text-gray-500 text-[18px] leading-[160%]'>Lorem Ipsum is not simply random text</p>
            </div>
          </div>
          <div className='p-32px gap-32px laptop:items-center laptop:flex-row flex flex-col border-transparent border duration-300 hover:border-gray-400'>
            <Image width={100} height={100} src={'/calendar-icon.svg'} alt='' />
            <div>
              <p className='font-bold text-[24px] leading-[120%]'>We offer best services</p>
              <p className='text-gray-500 text-[18px] leading-[160%]'>Lorem Ipsum is not simply random text</p>
            </div>
          </div>
          <div className='p-32px gap-32px laptop:items-center laptop:flex-row flex flex-col border-transparent border duration-300 hover:border-gray-400'>
            <Image width={100} height={100} src={'/coupon-icon.svg'} alt='' />
            <div>
              <p className='font-bold text-[24px] leading-[120%]'>We offer best services</p>
              <p className='text-gray-500 text-[18px] leading-[160%]'>Lorem Ipsum is not simply random text</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
}

function Testimonials(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='gap-y-64px py-32px flex flex-col relative'>
      <div className='gap-y-64px flex flex-col items-center text-center laptop:px-120px'>
        <div className='grid gap-16px text-center'>
          <p className='text-[24px] font-bold uppercase text-[#F85E9F] leading-[120%]'>Testimonials</p>
          <p className='text-[44px] font-bold leading-[120%]'>Trust our clients</p>
        </div>

        <Image width={128} height={128} src={'/mark-smith.svg'} alt='' />

        <div className='text-[28px] leading-[120%] font-bold'>
          <span className='text-orange-600'>Mark Smith</span>   / Travel Enthusiast
        </div>
        <div className='text-[18px] leading-[160%]'>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
        </div>
        <div className='flex gap-24px'>
          <div className='w-24px aspect-square rounded-full bg-red-400'></div>
          <div className='w-24px aspect-square rounded-full bg-red-400'></div>
          <div className='w-24px aspect-square rounded-full bg-red-400'></div>
        </div>
      </div>
      <div className="flex justify-between gap-x-32px laptop:absolute laptop:top-1/2 laptop:-translate-y-1/2 laptop:justify-between w-full">
        <div className='w-64px aspect-square rounded-full grid place-content-center border border-gray-300'>
          <ArrowLeftIcon width={24} />
        </div>
        <div className='w-64px aspect-square rounded-full text-white bg-violet-500 grid place-content-center'>
          <ArrowRightIcon width={24} />
        </div>
      </div>
    </div>
  </div>
}

function Subscribe(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='py-64px px-32px flex flex-col gap-64px bg-[#FACD49] bg-opacity-10 laptop:mt-110px relative laptop:px-64px laptop:py-128px'>
      <Image width={184} height={176} src={'/subscribe-rectangle.svg'} className='hidden laptop:block absolute -left-34px -top-66px' alt='' />
      <div className='grid gap-32px text-center'>
        <p className='text-[24px] font-bold uppercase text-[#F85E9F] leading-[120%]'>subscribe to our newsletter</p>
        <p className='text-[44px] font-bold leading-[120%]'>Prepare yourself & let’s explore the beauty of the world</p>
      </div>
      <div className='flex flex-col gap-32px laptop:flex-row'>
        <div className='shadow-sm px-32px py-24px gap-16px flex items-center rounded-16px bg-white laptop:flex-grow'>
          <EnvelopeIcon width={32} className='shrink-0' />
          <input type="text" className='border-none flex-auto focus:ring-0 text-[14px]' placeholder='Your Email' />
        </div>
        <button className='px-64px py-24px rounded-16px bg-violet-600 text-white text-[16px] font-bold'>Subscribe</button>
      </div>
    </div>
  </div>
}

function Footer(props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) {
  return <div {...props}>
    <div className='flex flex-col gap-64px py-32px desktop:flex-row laptop:py-64px'>
      <div className='flex flex-col gap-32px max-w-[560px]'>
        <div className='gap-16px flex items-center'>
          <div className='w-40px aspect-square shrink-0 relative rounded-full'>
            <Image src={'/logo.svg'} fill alt='' />
          </div>
          <span className='text-[24px] font-black'>Travlog</span>
        </div>
        <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</div>
        <div className='flex gap-32px'>
          <Image width={32} height={32} src={'/instagram-icon.svg'} alt='' />
          <Image width={32} height={32} src={'/twitter-icon.svg'} alt='' />
          <Image width={32} height={32} src={'/facebook-icon.svg'} alt='' />
        </div>
      </div>
      <div className='grid gap-x-32px laptop:grid-cols-3 gap-y-32px desktop:flex-grow'>
        <DropDownMenu header='Company' >
          <div className='grid gap-32px'>
            <p className='text-[18px] text-gray-500'>About</p>
            <p className='text-[18px] text-gray-500'>Career</p>
            <p className='text-[18px] text-gray-500'>Mobile</p>
          </div>
        </DropDownMenu>
        <DropDownMenu header='Contact Us' >
          <div className='grid gap-32px'>
            <p className='text-[18px] text-gray-500'>Why Travlog?</p>
            <p className='text-[18px] text-gray-500'>Partner with us</p>
            <p className='text-[18px] text-gray-500'>FAQ’s</p>
            <p className='text-[18px] text-gray-500'>Blog</p>
          </div>
        </DropDownMenu>
        <DropDownMenu header='Meet Us' >
          <div className='grid gap-32px'>
            <p className='text-[18px] text-gray-500'>+00 92 1234 56789</p>
            <p className='text-[18px] text-gray-500'>info@travlog.com</p>
            <p className='text-[18px] text-gray-500'>205. R Street, New York BD23200</p>
          </div>
        </DropDownMenu>
      </div>
    </div>
  </div>
}

function DropDownMenu({ header, children }: { header: string, children: ReactNode }) {
  const [show, setShow] = useState(false);
  return <div className='grid gap-32px items-start'>
    <div className='flex gap-16px items-center'>
      <p className='text-[24px] leading-[120%] font-bold flex-grow'>{header}</p>
      <button className='w-24px aspect-square rounded-full border border-gray-500 laptop:hidden' onClick={() => setShow(c => !c)} ></button>
    </div>
    <div className={twMerge(show ? '' : 'hidden', 'laptop:block duration-1000')}>
      {children}
    </div>
  </div>
}