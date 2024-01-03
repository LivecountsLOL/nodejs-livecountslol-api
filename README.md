
# Livecounts.lol Node.JS API Wrapper

Uses Livecounts.lol's YouTube API estimations.


## Installation

Install livecountslol with npm

```bash
  npm install livecountslol
  cd livecountslol
```
    
## Usage/Examples

```javascript
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
```


## Feedback

If you have any feedback, please reach out to us at feedback@livecounts.lol


## Code License

[shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

