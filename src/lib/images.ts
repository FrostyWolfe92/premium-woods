const U = (id: string, w = 1600, h?: number) => {
  const params = new URLSearchParams({
    w: String(w),
    q: "82",
    auto: "format",
    fit: "crop",
  });
  if (h) params.set("h", String(h));
  return `https://images.unsplash.com/photo-${id}?${params.toString()}`;
};

export const IMG = {
  // Hero — live edge walnut conference table in modern office
  hero: U("1517502884422-41eaead166d4", 1800, 1200),

  // Process / craftsmanship
  saw: U("1513467535987-fd81bc7d62f8", 1200, 800),
  tools: U("1530124566582-a618bc2615dc", 1200, 800),

  // Materials & projects
  kitchenIsland: U("1556910103-1c02745aae4d", 1200, 800),
  brassKitchen: U("1565538810643-b5bdb714032a", 1200, 1600),
  woodShelves: U("1556909190-eccf4a8bf97a", 1200, 800),
  liveEdge: U("1517502884422-41eaead166d4", 1200, 800),

  // Tight crops for material swatches (using crop params on same source)
  walnutTex: U("1517502884422-41eaead166d4", 800, 600),
  mapleTex: U("1567361808960-dec9cb578182", 800, 600),
  oakTex: U("1530124566582-a618bc2615dc", 800, 600),
  cherryTex: U("1556910103-1c02745aae4d", 800, 600),
  liveEdgeTex: U("1517502884422-41eaead166d4", 800, 600),
  epoxyTex: U("1513467535987-fd81bc7d62f8", 800, 600),
  laminateTex: U("1565538810643-b5bdb714032a", 800, 600),
  quartzTex: U("1556909190-eccf4a8bf97a", 800, 600),

  // Gallery
  gallery: [
    U("1517502884422-41eaead166d4", 1000, 750),
    U("1556910103-1c02745aae4d", 1000, 750),
    U("1565538810643-b5bdb714032a", 1000, 1300),
    U("1556909190-eccf4a8bf97a", 1000, 750),
    U("1513467535987-fd81bc7d62f8", 1000, 750),
    U("1530124566582-a618bc2615dc", 1000, 750),
  ],
};
