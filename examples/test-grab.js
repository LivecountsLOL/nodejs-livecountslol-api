// Example usage:

const LiveCountsLOL = require('../index.js');

const liveCounts = new LiveCountsLOL();

const channelId = 'UCi8kdQUD0PcHZThSbac9GdQ';


// should grab an youtuber's channel data & extracts results.
liveCounts.getLiveCounts(channelId)
  .then((result) => {
    // Accessing sub count
    const subCount = liveCounts.getSubCount(result);
    console.log('Sub Count:', subCount);

    // Accessing sub count history
    const subCountHistory = liveCounts.getSubCountHistory(result);
    console.log('Sub Count History:', subCountHistory);

    // Accessing channel image
    const channelImage = liveCounts.getChannelImage(result);
    console.log('Channel Image:', channelImage);

    // Accessing channel banner
    const channelBanner = liveCounts.getChannelBanner(result);
    console.log('Channel Banner:', channelBanner);

    // Accessing sub gain
    const subGain = liveCounts.getSubGain(result);
    console.log('Sub Gain:', subGain);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });