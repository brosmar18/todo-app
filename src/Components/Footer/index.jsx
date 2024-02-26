import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';


const Footer = () => {
    return (
        <footer className='w-full bg-gray-800 text-white p-4'>
            <div className='flex flex-col justify-center items-center md:justify-between md:flex-row-reverse container mx-auto gap-2'>
                <div className='flex space-x-4'>
                    <IconBrandInstagram />
                    <IconBrandYoutube />
                    <IconBrandTwitter />
                </div>
                <p className='text-gray-200'>&copy; To Do App. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
