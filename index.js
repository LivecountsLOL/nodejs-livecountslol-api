const axios = require('axios');

class LiveCountsLOL {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl || 'https://api-yt-est.livecounts.lol/estimations';
  }

  async getLiveCounts(channelId) {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/youtube/stats/${channelId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching live counts:', error.message);
      throw error;
    }
  }

  getSubCount(data) {
    if (!data || !data.DataContents) {
      console.error('Invalid data format for sub count');
      return null;
    }

    const subCountItem = data.DataContents.find(item => item.name === 'ChannelEstParams');
    return subCountItem ? subCountItem.value.followerCount : null;
  }

  getSubCountHistory(data) {
    if (!data || !data.history || !Array.isArray(data.history)) {
      console.error('Invalid data format for sub count history');
      return [];
    }

    return data.history.map(entry => ({
      subCount: entry.subCount,
      subGain: entry.subGain,
      totalViews: entry.totalViews,
      viewGain: entry.viewGain,
      timeNS: entry.timeNS,
    }));
  }

  getChannelImage(data) {
    if (!data || !data.DataContents) {
      console.error('Invalid data format for channel image');
      return null;
    }

    const channelImageItem = data.DataContents.find(item => item.name === 'ChannelImage');
    return channelImageItem ? channelImageItem.value : null;
  }

  getChannelBanner(data) {
    if (!data || !data.DataContents) {
      console.error('Invalid data format for channel banner');
      return null;
    }

    const channelBannerItem = data.DataContents.find(item => item.name === 'ChannelBanner');
    return channelBannerItem ? channelBannerItem.value : null;
  }

  getSubGain(data) {
    if (!data || !data.DataContents) {
      console.error('Invalid data format for sub gain');
      return null;
    }

    const subGainItem = data.DataContents.find(item => item.name === 'ChannelEstParams');
    return subGainItem ? subGainItem.value.subGain : null;
  }
}
module.exports = LiveCountsLOL;