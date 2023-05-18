/* eslint-disable no-useless-return */
/* eslint-disable no-underscore-dangle */
const permalink = require('./utilities/formatPermalink')

const { formatPermalink } = permalink

module.exports = async () => {
  const staticRedirects = [
    {
      source: '/contact-2',
      destination: '/contact-us',
      permanent: true,
    },
    {
      source: '/contact-2/',
      destination: '/contact-us',
      permanent: true,
    },
    {
      source: '/dry-ice-blasters',
      destination: '/products',
      permanent: true,
    },
    {
      source: '/dry-ice-blasters/',
      destination: '/products',
      permanent: true,
    },
    {
      source: '/dry-ice-pellet-supply/',
      destination: '/products/dry-ice-pellets',
      permanent: true,
    },
    {
      source: '/dry-ice-pellet-supply',
      destination: '/products/dry-ice-pellets',
      permanent: true,
    },
    {
      source: '/what-is-dry-ice/',
      destination: '/blog/what-is-dry-ice',
      permanent: true,
    },
    {
      source: '/what-is-dry-ice',
      destination: '/blog/what-is-dry-ice',
      permanent: true,
    },
    {
      source: '/applications/',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/applications',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/applications-of-dry-ice-blasting/',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/applications-of-dry-ice-blasting',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/dry-ice-blasting/',
      destination: '/blog/dry-ice-blasting',
      permanent: true,
    },
    {
      source: '/dry-ice-blasting',
      destination: '/blog/dry-ice-blasting',
      permanent: true,
    },
    {
      source: '/co2-snow-cleaning-automation/',
      destination: '/blog/co2-snow-cleaning-automation',
      permanent: true,
    },
    {
      source: '/co2-snow-cleaning-automation',
      destination: '/blog/co2-snow-cleaning-automation',
      permanent: true,
    },
    {
      source: '/benefits-of-dry-ice-blasting/',
      destination: '/blog/benefits-of-dry-ice-blasting',
      permanent: true,
    },
    {
      source: '/benefits-of-dry-ice-blasting',
      destination: '/blog/benefits-of-dry-ice-blasting',
      permanent: true,
    },
    {
      source: '/tag/clean-presses-with-dry-ice-blasting/',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/tag/clean-presses-with-dry-ice-blasting',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-for-food-industry/',
      destination: '/industry/food-and-beverage',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-for-food-industry',
      destination: '/industry/food-and-beverage',
      permanent: true,
    },
    {
      source: '/tag/clean-printers-with-dry-ice-blasting/',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/tag/clean-printers-with-dry-ice-blasting',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-foundry/',
      destination: '/industry/foundry',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-foundry',
      destination: '/industry/foundry',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-in-the-pharmaceutical-industry/',
      destination: '/industry/medical-pharma',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-in-the-pharmaceutical-industry',
      destination: '/industry/medical-pharma',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-power-generation/',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-power-generation',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-to-clean-heat-exchangers/',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/tag/dry-ice-blasting-to-clean-heat-exchangers',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-electrical-components/',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-electrical-components',
      destination: '/industry/power-generation',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-automotive-industry/',
      destination: '/industry/automotive',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-automotive-industry',
      destination: '/industry/automotive',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-rubber-and-plastics/',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-rubber-and-plastics',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-rubber-and-plastics/',
      destination: '/industry/plastics-composites',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-rubber-and-plastics',
      destination: '/industry/plastics-composites',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-printing-and-packaging/',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-printing-and-packaging',
      destination: '/industry/printing',
      permanent: true,
    },
    {
      source: '/tag/using-dry-ice-blasting-in-the-automotive-industry/',
      destination: '/industry/automotive',
      permanent: true,
    },
    {
      source: '/tag/using-dry-ice-blasting-in-the-automotive-industry',
      destination: '/industry/automotive',
      permanent: true,
    },
    {
      source: '/category/applications/',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/category/applications',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/category/uncategorized/',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/category/uncategorized',
      destination: '/industry',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-food-and-pharmaceuticals/',
      destination: '/industry/medical-pharma',
      permanent: true,
    },
    {
      source: '/2020/05/30/dry-ice-blasting-applications-food-and-pharmaceuticals',
      destination: '/industry/medical-pharma',
      permanent: true,
    },
    {
      source: '/2020/05/27/using-dry-ice-blasting-in-aerospace-and-defense/',
      destination: '/industry/aerospace-and-aviation',
      permanent: true,
    },
    {
      source: '/2020/05/27/using-dry-ice-blasting-in-aerospace-and-defense',
      destination: '/industry/aerospace-and-aviation',
      permanent: true,
    },
    {
      source: '/category/dry-ice-technology/',
      destination: '/our-technology',
      permanent: true,
    },
    {
      source: '/category/dry-ice-technology',
      destination: '/our-technology',
      permanent: true,
    },
    {
      source: '/manufacturing-equipment/',
      destination: '/products/dry-ice-manufacturing-equipment',
      permanent: true,
    },
    {
      source: '/manufacturing-equipment',
      destination: '/products/dry-ice-manufacturing-equipment',
      permanent: true,
    },
    {
      source: '/dry-ice-blasting',
      destination: '/blog/dry-ice-blasting',
      permanent: true,
    },
  ]

  const internetExplorerRedirect = {
    source: '/:path((?!ie-incompatible.html$).*)', // all pages except the incompatibility page
    has: [
      {
        type: 'header',
        key: 'user-agent',
        value: '(.*Trident.*)', // all ie browsers
      },
    ],
    permanent: false,
    destination: '/ie-incompatible.html',
  }

  const redirectsRes = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_URL}/api/redirects?limit=1000&depth=1`,
  )
  const redirectsData = await redirectsRes.json()

  const { docs } = redirectsData

  // eslint-disable-next-line prefer-const
  let dynamicRedirects = []

  if (docs) {
    docs.forEach(doc => {
      const { from, to: { type, url, reference } = {} } = doc

      let source = from.replace(process.env.NEXT_PUBLIC_APP_URL, '').split('?')[0].toLowerCase()

      if (source.endsWith('/')) source = source.slice(0, -1) // a trailing slash will break this redirect

      let destination = '/'

      if (type === 'custom' && url) {
        destination = url.replace(process.env.NEXT_PUBLIC_APP_URL, '')
      }

      if (
        type === 'reference' &&
        typeof reference.value === 'object' &&
        reference?.value?._status === 'published'
      ) {
        destination = `${process.env.NEXT_PUBLIC_APP_URL}/${formatPermalink(reference)}`
      }

      const redirect = {
        source,
        destination,
        permanent: true,
      }

      if (source.startsWith('/') && destination && source !== destination) {
        return dynamicRedirects.push(redirect)
      }

      // eslint-disable-next-line consistent-return
      return
    })
  }

  const redirects = [...staticRedirects, internetExplorerRedirect, ...dynamicRedirects]

  return redirects
}
