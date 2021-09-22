import { Flickr } from './flickr';
import { Patch } from './patch';
import { Reddit } from './reddit';

export interface Links {
  patch: Patch;
  reddit: Reddit;
  webcast: string;
  youtube_id: string;
  flickr: Flickr;
  presskit: string;
  article: string;
  wikipedia: string;
}
