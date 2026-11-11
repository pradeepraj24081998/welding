const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

// Create directories if not exist
const dirs = [
  'public/images/plumber',
  'public/images/steel-grill-gate',
  'public/images/fabrication',
  'public/images/stainless-steel-gates',
  'public/images/mosquito-nets'
];

dirs.forEach(d => {
  const fullPath = path.resolve(d);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
  }
});

const serviceImages = {
  plumber: [
    {
      name: 'plumber-01.webp',
      url: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1600&q=80', // Plumber with wrench fixing water pipes
      alt: 'Professional plumber working on residential water supply pipeline'
    },
    {
      name: 'plumber-02.webp',
      url: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1600&q=80', // Water pipes, valves and plumbing connections
      alt: 'PVC, copper and CPVC water pipeline installation and pressure fittings'
    },
    {
      name: 'plumber-03.webp',
      url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1600&q=80', // Bathroom sanitary plumbing fittings
      alt: 'Bathroom sanitary plumbing installation and chrome fixtures'
    },
    {
      name: 'plumber-04.webp',
      url: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1600&q=80', // Plumber installing pipe fittings with tools
      alt: 'Plumber installing kitchen pipeline and water drainage system'
    },
    {
      name: 'plumber-05.webp',
      url: 'https://images.unsplash.com/photo-1542013936693-884638332954?auto=format&fit=crop&w=1600&q=80', // Modern pipe valves and water plumbing maintenance
      alt: 'Plumbing maintenance, leak repair, and water line valve installation'
    }
  ],
  'steel-grill-gate': [
    {
      name: 'grill-01.webp',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', // Modern residential entrance security gate
      alt: 'Modern residential MS steel grill entrance gate'
    },
    {
      name: 'grill-02.webp',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', // Architectural metal grill work
      alt: 'Decorative steel grill gate with geometric vertical pattern'
    },
    {
      name: 'grill-03.webp',
      url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1600&q=80', // Heavy duty metal security gate
      alt: 'Heavy-duty steel security grill gate with anti-pry framework'
    },
    {
      name: 'grill-04.webp',
      url: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1600&q=80', // Double door security grill gate
      alt: 'Double-door compound steel grill gate for residential house'
    },
    {
      name: 'grill-05.webp',
      url: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1600&q=80', // Detailed welded grill patterns
      alt: 'Detailed welded steel grill pattern with durable anti-rust finish'
    }
  ],
  fabrication: [
    {
      name: 'fabrication-01.webp',
      url: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80', // Welder with mask and bright sparks
      alt: 'Professional TIG and MIG welding with dramatic sparks in fabrication workshop'
    },
    {
      name: 'fabrication-02.webp',
      url: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80', // Metal fabrication workshop and worker
      alt: 'Structural steel framework assembly in metal fabrication workshop'
    },
    {
      name: 'fabrication-03.webp',
      url: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=80', // Precision metal cutting and sparks
      alt: 'High-precision metal cutting, angle grinding, and structural steel preparation'
    },
    {
      name: 'fabrication-04.webp',
      url: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=80', // Steel roofing truss fabrication
      alt: 'Heavy-duty steel roof truss and industrial canopy fabrication'
    },
    {
      name: 'fabrication-05.webp',
      url: 'https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?auto=format&fit=crop&w=1600&q=80', // Precision structural joint welding
      alt: 'Custom metal structural fabrication and precision steel staircase assembly'
    }
  ],
  'stainless-steel-gates': [
    {
      name: 'ss-gate-01.webp',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80', // Modern luxury entrance with stainless steel elements
      alt: 'Modern SS 304 stainless steel main entrance sliding gate'
    },
    {
      name: 'ss-gate-02.webp',
      url: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80', // Luxury stainless steel architectural gate
      alt: 'Luxury polished stainless steel compound gate with geometric louvers'
    },
    {
      name: 'ss-gate-03.webp',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', // Stainless steel architectural finish
      alt: 'High-grade SS 304 and 316 weather-resistant gate fabrication'
    },
    {
      name: 'ss-gate-04.webp',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80', // Modern horizontal SS gate profile
      alt: 'Modern horizontal and vertical stainless steel sliding gate design'
    },
    {
      name: 'ss-gate-05.webp',
      url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f8?auto=format&fit=crop&w=1600&q=80', // Heavy duty stainless steel entrance
      alt: 'Premium mirror-polished stainless steel gate with heavy-duty ball-bearing hinges'
    }
  ],
  'mosquito-nets': [
    {
      name: 'mosquito-01.webp',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80', // Window with screen
      alt: 'Modern aluminum frame window mosquito mesh screen installation'
    },
    {
      name: 'mosquito-02.webp',
      url: 'https://images.unsplash.com/photo-1502005229762-ee1b2b8ab98f?auto=format&fit=crop&w=1600&q=80', // Balcony / door mesh screen
      alt: 'Pleated retractable mosquito net door for balcony and main entrance'
    },
    {
      name: 'mosquito-03.webp',
      url: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80', // Sliding mosquito net
      alt: 'Smooth sliding mosquito net system for residential glass windows'
    },
    {
      name: 'mosquito-04.webp',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80', // Stainless steel security mesh
      alt: 'Stainless steel wire mesh and magnetic mosquito screen for windows'
    },
    {
      name: 'mosquito-05.webp',
      url: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80', // Insect protection screen
      alt: 'Balcony mosquito net enclosure with insect-proof seal'
    }
  ]
};

function downloadAndConvert(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Handle redirect
        return downloadAndConvert(res.headers.location, outputPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Status ${res.statusCode} for ${url}`));
      }

      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', async () => {
        try {
          const buffer = Buffer.concat(chunks);
          await sharp(buffer)
            .resize({ width: 1400, height: 933, fit: 'cover' })
            .webp({ quality: 84 })
            .toFile(outputPath);
          resolve(outputPath);
        } catch (err) {
          reject(err);
        }
      });
      res.on('error', reject);
    }).on('error', reject);
  });
}

// Also use local authentic photography where applicable as fallback or primary
async function run() {
  console.log('Starting image download and WebP conversion...');
  for (const category of Object.keys(serviceImages)) {
    console.log(`Processing category: ${category}`);
    const items = serviceImages[category];
    for (const item of items) {
      const dest = path.resolve(`public/images/${category}/${item.name}`);
      try {
        await downloadAndConvert(item.url, dest);
        const stats = fs.statSync(dest);
        console.log(`  ✓ Created ${item.name} (${stats.size} bytes)`);
      } catch (e) {
        console.log(`  ✗ Failed ${item.name}: ${e.message}`);
      }
    }
  }
  console.log('Finished image processing!');
}

run();

