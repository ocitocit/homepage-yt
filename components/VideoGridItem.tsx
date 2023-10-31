'use client';

import { formatDuration } from '@/libs/formatDuration';
import { formatTimeAgo } from '@/libs/formatTimeAgo';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

interface VideoGridItemProps {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
}

const VideoGridItem: React.FC<VideoGridItemProps> = ({
  id,
  title,
  channel,
  views,
  postedAt,
  duration,
  thumbnailUrl,
  videoUrl
}) => {
  const router = useRouter();

  const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
    notation: 'compact'
  });

  const [isVideoPlaying, setisVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (videoRef.current == null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      onMouseEnter={() => setisVideoPlaying(true)}
      onMouseLeave={() => setisVideoPlaying(false)}
      className="flex flex-col gap-2"
    >
      <div onClick={() => router.push(`/watch?v=${id}`)} className="relative aspect-video">
        <Image
          src={thumbnailUrl}
          fill
          className={`
            block
            h-full
            w-full
            cursor-pointer
            object-cover
            transition-[border-radius] 
            duration-200
            ${isVideoPlaying ? 'rounded-none' : 'rounded-xl'}
          `}
          alt={title}
        />

        <div
          className="
            absolute
            bottom-1
            right-1
            rounded
            bg-secondary-dark
            px-0.5
            text-sm
            text-secondary
          "
        >
          {formatDuration(duration)}
        </div>
        <video
          className={`
            absolute
            inset-0
            block
            h-full
            cursor-pointer
            object-cover
            transition-opacity
            duration-200
            ${isVideoPlaying ? 'opacity-100 delay-200' : 'opacity-0'}
          `}
          muted
          playsInline
          src={videoUrl}
          ref={videoRef}
        />
      </div>
      <div className="flex gap-2">
        <div onClick={() => router.push(`/@${channel.id}`)} className="flex-shrink-0">
          <Image
            width="100"
            height="100"
            src={channel.profileUrl}
            alt={channel.name}
            className="h-12 w-12 cursor-pointer rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => router.push(`/whatch?v=${id}`)}
            className="cursor-pointer font-bold"
          >
            {title}
          </div>
          <div
            onClick={() => router.push(`/@${channel.id}`)}
            className="cursor-pointer text-sm text-secondary-text hover:text-secondary-dark-hover"
          >
            {channel.name}
          </div>
          <div className="text-sm text-secondary-text">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoGridItem;
