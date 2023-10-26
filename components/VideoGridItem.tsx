'use client';

import { formatDuration } from '@/libs/formatDuration';
import { formatTimeAgo } from '@/libs/formatTimeAgo';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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

  return (
    <div className="flex flex-col gap-2">
      <div
        onClick={() => router.push(`/watch?v=${id}`)}
        className="relative aspect-video"
      >
        <Image
          src={thumbnailUrl}
          fill
          className="
            block
            w-full
            h-full
            object-cover
            rounded-xl
          "
          alt={title}
        />

        <div
          className="
            absolute
            bottom-1
            right-1
            bg-secondary-dark
            text-secondary
            text-sm
            px-0.5
            rounded
          "
        >
          {formatDuration(duration)}
        </div>
      </div>
      <div className="flex gap-2">
        <div
          onClick={() => router.push(`/@${channel.id}`)}
          className="flex-shrink-0"
        >
          <Image
            width="100"
            height="100"
            src={channel.profileUrl}
            alt={channel.name}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <div
            onClick={() => router.push(`/whatch?v=${id}`)}
            className="font-bold"
          >
            {title}
          </div>
          <div
            onClick={() => router.push(`/@${channel.id}`)}
            className="text-sm text-secondary-text"
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
