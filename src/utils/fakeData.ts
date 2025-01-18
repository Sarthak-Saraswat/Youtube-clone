import { VideoItem } from "@/types";

export const dummyVideoItem: VideoItem = {
  items: [
    {
      contentDetails: {
        relatedPlaylists: {
          likes: "PL1234567890ABCDEFG",
          uploads: "PL1234567890ABCDEFG",
        },
      },
      etag: "etagValue",
      id: "videoId1",
      kind: "youtube#video",
      snippet: {
        customUrl: "https://www.youtube.com/watch?v=videoId1",
        description: "This is a sample video description.",
        localized: {
          title: "Sample Video Title",
          description: "This is a sample video description.",
        },
        publishedAt: "2023-11-23T18:25:42Z",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/videoId1/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "assets/thumbnail1.png",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/videoId1/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        title: "Sample Video Title",
      },
    },
    {
      contentDetails: {
        relatedPlaylists: {
          likes: "PL1234567890ABCDEFG",
          uploads: "PL1234567890ABCDEFG",
        },
      },
      etag: "etagValue",
      id: "videoId2",
      kind: "youtube#video",
      snippet: {
        customUrl: "https://www.youtube.com/watch?v=videoId1",
        description: "This is a sample video description.",
        localized: {
          title: "Sample Video Title",
          description: "This is a sample video description.",
        },
        publishedAt: "2023-11-23T18:25:42Z",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/videoId1/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "assets/thumbnail2.png",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/videoId1/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        title: "Sample Video Title",
      },
    },
    {
      contentDetails: {
        relatedPlaylists: {
          likes: "PL1234567890ABCDEFG",
          uploads: "PL1234567890ABCDEFG",
        },
      },
      etag: "etagValue",
      id: "videoId3",
      kind: "youtube#video",
      snippet: {
        customUrl: "https://www.youtube.com/watch?v=videoId1",
        description: "This is a sample video description.",
        localized: {
          title: "Sample Video Title",
          description: "This is a sample video description.",
        },
        publishedAt: "2023-11-23T18:25:42Z",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/videoId1/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "assets/thumbnail3.png",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/videoId1/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        title: "Sample Video Title",
      },
    },
    {
      contentDetails: {
        relatedPlaylists: {
          likes: "PL1234567890ABCDEFG",
          uploads: "PL1234567890ABCDEFG",
        },
      },
      etag: "etagValue",
      id: "videoId4",
      kind: "youtube#video",
      snippet: {
        customUrl: "https://www.youtube.com/watch?v=videoId1",
        description: "This is a sample video description.",
        localized: {
          title: "Sample Video Title",
          description: "This is a sample video description.",
        },
        publishedAt: "2023-11-23T18:25:42Z",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/videoId1/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "assets/thumbnail4.png",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/videoId1/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        title: "Sample Video Title",
      },
    },
  ],
  id: {
    videoId: "videoId1",
  },
  snippet: {
    customUrl: "https://www.youtube.com/watch?v=videoId1",
    topLevelComment: {
      etag: "etagValue",
      id: "commentId1",
      kind: "youtube#comment",
      snippet: {
          videoId: "videoId1",
          textDisplay: "This is a sample comment.",
          textOriginal: "This is a sample comment.",
          authorDisplayName: "John Doe",
          authorProfileImageUrl: "https://example.com/profile.jpg",
          publishedAt: "2023-11-24T00:00:00Z",
          authorChannelId: {
              value: ""
          },
          authorChannelUrl: "",
          canRate: false,
          channelId: "",
          likeCount: 0,
          updatedAt: "",
          viewerRating: ""
      },
    },
    title: "Sample Video Title",
    description: "This is a sample video description.",
    channelTitle: "Sample Channel",
    channelId: "UC1234567890ABCDEFG",
    publishedAt: "2023-11-23T18:25:42Z",
    thumbnails: {
      medium: {
        url: "https://i.ytimg.com/vi/videoId1/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/videoId1/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      default: { url: "https://i.ytimg.com/vi/videoId1/default.jpg" },
    },
    categoryId: "1",
  },
  statistics: {
    viewCount: "1000",
    likeCount: "500",
    dislikeCount: "50",
    favoriteCount: "100",
    commentCount: "200",
    subscriberCount: "10000",
  },
  contentDetails: {
    relatedPlaylists: {
      likes: "PL1234567890ABCDEFG",
      uploads: "PL1234567890ABCDEFG",
    },
    videoId: "videoId1",
    duration: "PT5M00S",
    dimension: "2d",
    definition: "hd",
    caption: "true",
    licensedContent: true,
    regionRestriction: {
      allowed: ["US", "GB", "CA"],
    },
  },
  brandingSettings: {
    channel: {
      title: "Sample Channel Title",
      description: "Sample Channel Description",
      keywords: "keyword1, keyword2",
      unsubscribedTrailer: "https://www.youtube.com/watch?v=trailerId",
    },
    image: {
      bannerExternalUrl: "https://example.com/banner.jpg",
    },
  },
};
