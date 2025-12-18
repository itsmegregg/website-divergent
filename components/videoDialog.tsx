'use client';

import {
  VideoPlayer,
  VideoPlayerContent,
} from '@/components/ui/shadcn-io/video-player';
import { Dialog } from '@radix-ui/react-dialog';
import { DialogContent, DialogTitle } from './ui/dialog';
import { useState } from 'react';
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const VideoPlayerDialog = () => {

    const [open, setOpen] = useState<boolean>(true)

    return (
       <Dialog open={open} onOpenChange={()=>setOpen(false)}>
            <DialogContent className='bg-transparent z-100 border-none h-3/4 md:h-9/10'>
                <VisuallyHidden>
                    <DialogTitle>Pop up video</DialogTitle>
                </VisuallyHidden>
                
                <VideoPlayer className="overflow-hidden rounded-lg bg-transparent">
                    <VideoPlayerContent
                        muted
                        crossOrigin=""
                        preload="auto"
                        slot="media"
                        src="Christmas Party.mp4"
                        autoPlay
                        playsInline
                        className='object-contain h-full size bg-transparent'
                    />
                </VideoPlayer>

            </DialogContent>
        </Dialog> 
    )
    
};
export default VideoPlayerDialog;