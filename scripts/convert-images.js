#!/usr/bin/env node

/**
 * Image Conversion Script for Modern Formats
 * Converts JPEG/PNG images to WebP and AVIF formats for better compression
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const INPUT_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_DIR = path.join(__dirname, '..', 'public', 'optimized');

// Image quality settings
const QUALITY_SETTINGS = {
  webp: { quality: 80 },
  avif: { quality: 75 },
  jpeg: { quality: 85, mozjpeg: true }
};

// Responsive breakpoints
const BREAKPOINTS = {
  small: 400,
  medium: 800,
  large: 1200,
  xlarge: 1600
};

// Images that need conversion (excluding icons and favicons)
const TARGET_IMAGES = [
  'buisness_card.jpeg',
  'logo.jpeg',
  'partner_schneider.jpeg', 
  'schneider_electric.jpeg',
  'product4.jpeg',
  'product3.jpeg',
  'partner_elmeasure.jpeg',
  'product2.jpeg',
  'product_1.jpeg',
  'partners.jpeg'
];

async function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

async function convertImage(inputPath, filename) {
  const baseName = path.parse(filename).name;
  const outputDir = path.join(OUTPUT_DIR);
  
  await ensureDirectory(outputDir);
  
  console.log(`Converting ${filename}...`);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${Math.round(metadata.size / 1024)}KB`);
    
    // Convert to WebP (multiple sizes)
    for (const [sizeName, width] of Object.entries(BREAKPOINTS)) {
      if (width <= metadata.width) {
        const webpPath = path.join(outputDir, `${baseName}-${sizeName}.webp`);
        await image
          .resize(width, null, { withoutEnlargement: true })
          .webp(QUALITY_SETTINGS.webp)
          .toFile(webpPath);
        
        const stats = fs.statSync(webpPath);
        console.log(`  WebP ${sizeName}: ${width}px, ${Math.round(stats.size / 1024)}KB`);
      }
    }
    
    // Convert to AVIF (multiple sizes)
    for (const [sizeName, width] of Object.entries(BREAKPOINTS)) {
      if (width <= metadata.width) {
        const avifPath = path.join(outputDir, `${baseName}-${sizeName}.avif`);
        await image
          .resize(width, null, { withoutEnlargement: true })
          .avif(QUALITY_SETTINGS.avif)
          .toFile(avifPath);
        
        const stats = fs.statSync(avifPath);
        console.log(`  AVIF ${sizeName}: ${width}px, ${Math.round(stats.size / 1024)}KB`);
      }
    }
    
    // Create optimized JPEG as fallback
    const optimizedJpegPath = path.join(outputDir, `${baseName}-optimized.jpg`);
    await image
      .jpeg(QUALITY_SETTINGS.jpeg)
      .toFile(optimizedJpegPath);
    
    const jpegStats = fs.statSync(optimizedJpegPath);
    console.log(`  Optimized JPEG: ${Math.round(jpegStats.size / 1024)}KB`);
    
    console.log(`✅ Converted ${filename}\n`);
    
  } catch (error) {
    console.error(`❌ Error converting ${filename}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Converting images to modern formats...\n');
  
  for (const filename of TARGET_IMAGES) {
    const inputPath = path.join(INPUT_DIR, filename);
    
    if (fs.existsSync(inputPath)) {
      await convertImage(inputPath, filename);
    } else {
      console.log(`⚠️  File not found: ${filename}`);
    }
  }
  
  console.log('🎉 Image conversion complete!');
  console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
}

main().catch(console.error);
