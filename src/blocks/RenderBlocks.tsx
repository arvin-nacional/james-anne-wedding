import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { CeremonyReceptionBlock } from '@/blocks/CeremonyReception/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { DressCodeBlock } from '@/blocks/DressCode/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { HeroCarouselBlock } from '@/blocks/HeroCarousel/Component'
import { LoveStoryBlock } from '@/blocks/LoveStory/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { RSVPBlock } from '@/blocks/RSVP/Component'
import { ContactBlock } from '@/blocks/Contact/Component'
import { WeddingDetailsBlock } from '@/blocks/WeddingDetails/Component'

const blockComponents = {
  ceremonyReception: CeremonyReceptionBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  dressCode: DressCodeBlock,
  formBlock: FormBlock,
  heroCarousel: HeroCarouselBlock,
  loveStory: LoveStoryBlock,
  mediaBlock: MediaBlock,
  rsvp: RSVPBlock,
  contact: ContactBlock,
  weddingDetails: WeddingDetailsBlock,
}

// Map block types to section IDs for navigation
const blockToSectionId = {
  loveStory: 'love-story',
  weddingDetails: 'wedding-details',
  ceremonyReception: 'ceremony-reception',
  dressCode: 'dress-code',
  rsvp: 'rsvp',
  contact: 'contact',
  heroCarousel: 'hero',
  cta: 'cta',
  content: 'content',
  mediaBlock: 'media',
  formBlock: 'form',
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]
            const sectionId = blockToSectionId[blockType]

            if (Block) {
              return (
                <div key={index} id={sectionId}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
