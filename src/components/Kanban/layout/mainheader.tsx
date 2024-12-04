import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Avatar } from '@radix-ui/react-avatar';
import { Link2, Pencil, Plus } from 'lucide-react';
import React from 'react';

interface MainHeaderProps {
  title: string; 
  images: string[];
}
const avatarImages : string[] = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",
];

const MainHeader: React.FC<MainHeaderProps> = ({ title , images}) => (
  <div className="flex justify-between mx-2 my-4">
    <div className="flex gap-6 ">
      <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight">
        {title}
      </h1>
      <div className="flex gap-5 mt-2">
      <Button variant="secondary" size="xss"> 
      <Pencil />
        </Button>
        <Button variant="secondary" size="xss"> 
        <Link2 />
        </Button>
      </div>
    </div>
    <div className="flex gap-6 justify-between items-center ">
      <div className="flex gap-2 items-center">

    
    <Button variant="subtle" size="xss"> <Plus/> 
    </Button> 
    <span className="text-sm font-light">
        Invite
      </span>
      </div>
     
    <Avatar className="flex -space-x-2">{avatarImages.map((src, index) => (
    <AvatarImage
      key={index} 
      src={src}
      alt={`@shadcn-${index}`}
      className="rounded-full w-8 h-8"
    />
  ))}
    </Avatar>

    </div>

  </div>
);

export default MainHeader;
