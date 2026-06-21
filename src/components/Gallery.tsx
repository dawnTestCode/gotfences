const galleryItems = [
  { caption: "Rail Fence — Job 1" },
  { caption: "Hog Wire — Job 2" },
  { caption: "Vinyl Privacy — Job 3" },
  { caption: "Pasture Containment — Job 4" },
];

export default function Gallery() {
  return (
    <section className="section gallery-section" id="gallery">
      <div className="wrap">
        <div className="section-head">
          <span className="label-tag">Recent Work</span>
          <h2>Jobs From Around The Property</h2>
          <p>Photos coming soon — swap these placeholders for real job shots whenever you're ready.</p>
        </div>

        <div className="polaroid-grid">
          {galleryItems.map((item) => (
            <figure className="polaroid" key={item.caption}>
              <div className="ph">Photo<br />Placeholder</div>
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
