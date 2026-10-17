import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  CircleDollarSign,
  Compass,
  Heart,
  Home,
  Layers3,
  Menu,
  MessageCircle,
  MoreHorizontal,
  Plus,
  RotateCcw,
  Search,
  Send,
  Share2,
  ShoppingBag,
  Sparkles,
  Star,
  Target,
  ThumbsDown,
  UserRound,
  Users,
  WalletCards,
  X,
  Zap,
} from "lucide-react";

type Page = "Discover" | "Missions" | "Collections" | "Budget" | "Friends" | "Profile";
type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  category: string;
  rating: number;
  reviews: number;
  match: number;
  image: string;
  description: string;
  accent: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Studio Pro Headphones",
    brand: "Auraline",
    price: 89,
    category: "Tech",
    rating: 4.8,
    reviews: 1240,
    match: 96,
    image:
      "https://images.unsplash.com/photo-1766338055584-5ffe426a7e57?auto=format&fit=crop&w=1200&q=85",
    description: "Immersive sound, cloud-soft cushions, and 40 hours of listening in a warm neutral finish.",
    accent: "For your focused era",
  },
  {
    id: 2,
    name: "Noma Glow Lamp",
    brand: "Hearth & Form",
    price: 64,
    category: "Home",
    rating: 4.7,
    reviews: 684,
    match: 92,
    image:
      "https://images.unsplash.com/photo-1699979306075-1b4c943a3b16?auto=format&fit=crop&w=1200&q=85",
    description: "A sculptural bedside lamp with three warm light settings and a compact linen shade.",
    accent: "A softer kind of light",
  },
  {
    id: 3,
    name: "Cloudline Runners",
    brand: "North & Other",
    price: 76,
    category: "Fashion",
    rating: 4.6,
    reviews: 932,
    match: 89,
    image:
      "https://images.unsplash.com/photo-1632761486768-5a50cf7329cf?auto=format&fit=crop&w=1200&q=85",
    description: "Everyday trainers made with recycled mesh, a cushioned sole, and easy neutral styling.",
    accent: "Made for all-day wandering",
  },
  {
    id: 4,
    name: "Daily Ritual Set",
    brand: "Morrow Skin",
    price: 42,
    category: "Beauty",
    rating: 4.9,
    reviews: 508,
    match: 87,
    image:
      "https://images.unsplash.com/photo-1779117691346-5de09d89a73f?auto=format&fit=crop&w=1200&q=85",
    description: "A simple three-step hydration ritual with cleanser, serum, and barrier cream.",
    accent: "Less steps, happier skin",
  },
];

const nav: { label: Page; icon: typeof Compass }[] = [
  { label: "Discover", icon: Compass },
  { label: "Missions", icon: Target },
  { label: "Collections", icon: Layers3 },
  { label: "Budget", icon: WalletCards },
  { label: "Friends", icon: Users },
  { label: "Profile", icon: UserRound },
];

function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled = false,
  title,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "icon" | "dark";
  className?: string;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
    >
      {children}
    </button>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span className="logo-mark"><ShoppingBag size={18} strokeWidth={2.5} /></span>
      <span>Shop<span>Scroller</span></span>
    </div>
  );
}

function Toast({ text }: { text: string }) {
  return <div className="toast"><Check size={16} />{text}</div>;
}

function Landing({ onStart }: { onStart: () => void }) {
  return (
    <main className="landing">
      <header className="landing-nav">
        <Logo />
        <div className="landing-links">
          <span>How it works</span><span>Why ShopScroller</span>
        </div>
        <Button onClick={onStart} variant="dark">Try it now <ArrowRight size={17} /></Button>
      </header>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={14} /> Shopping, reimagined</div>
          <h1>Find your next<br /><em>favorite thing.</em></h1>
          <p>Swipe through products you’ll actually love. Discover smarter, shop together, and stay comfortably on budget.</p>
          <div className="hero-actions">
            <Button onClick={onStart}>Start discovering <ArrowRight size={18} /></Button>
            <div className="happy-shoppers">
              <div className="mini-avatars"><span>AM</span><span>JK</span><span>RL</span></div>
              <p><strong>12k+</strong> happy scrollers</p>
            </div>
          </div>
          <div className="hero-note"><Zap size={15} fill="currentColor" /> Gets smarter with every swipe</div>
        </div>
        <div className="hero-visual">
          <div className="float-card float-left">
            <img src={products[1].image} alt="Warm bedside lamp" />
            <span>HOME</span><strong>{products[1].name}</strong><small>${products[1].price}</small>
          </div>
          <div className="phone-card">
            <div className="phone-top"><span>9:41</span><Logo /><MoreHorizontal size={18} /></div>
            <img src={products[0].image} alt="Cream headphones on a book" />
            <div className="phone-details">
              <small>{products[0].brand} · {products[0].category}</small>
              <h3>{products[0].name}</h3>
              <div className="price-row"><strong>${products[0].price}</strong><span><Star size={13} fill="currentColor" /> 4.8</span></div>
              <div className="phone-actions"><span><X /></span><span className="heart"><Heart fill="currentColor" /></span></div>
              <p>SWIPE TO DISCOVER</p>
            </div>
          </div>
          <div className="float-card float-right">
            <img src={products[3].image} alt="Minimal skincare products" />
            <span>BEAUTY</span><strong>{products[3].name}</strong><small>${products[3].price}</small>
          </div>
          <div className="match-bubble"><Sparkles size={17} /><strong>96% match</strong><span>Made for your taste</span></div>
        </div>
      </section>
      <section className="benefits">
        <div><span>01</span><Heart /><h3>Swipe to discover</h3><p>A fun feed of finds picked for you, not everyone else.</p></div>
        <div><span>02</span><Sparkles /><h3>It learns your taste</h3><p>Every yes and no makes tomorrow’s feed feel more like you.</p></div>
        <div><span>03</span><Users /><h3>Save, plan, share</h3><p>Build collections, stay on budget, and shop alongside friends.</p></div>
      </section>
    </main>
  );
}

function Onboarding({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(["Technology", "Home Decor", "Fashion"]);
  const interests = ["Fashion", "Technology", "Beauty", "Home Decor", "Gaming", "Fitness", "Food & Kitchen", "Books", "Lifestyle"];
  const toggle = (item: string) => setSelected((s) => s.includes(item) ? s.filter((x) => x !== item) : [...s, item]);

  return (
    <main className="onboarding">
      <div className="onboard-top"><Logo /><span>STEP {step} OF 3</span><Button variant="ghost" onClick={onDone}>Skip for now</Button></div>
      <div className="progress"><i style={{ width: `${step * 33.33}%` }} /></div>
      {step === 1 && (
        <section className="onboard-card">
          <div className="onboard-icon"><Sparkles /></div>
          <p className="kicker">LET’S MAKE THIS YOURS</p>
          <h1>What are you into?</h1>
          <p>Pick a few categories and we’ll start shaping your feed. You can always change these later.</p>
          <div className="interest-grid">
            {interests.map((item) => <Button key={item} variant="secondary" className={selected.includes(item) ? "selected" : ""} onClick={() => toggle(item)}>{selected.includes(item) && <Check size={16} />}{item}</Button>)}
          </div>
          <Button onClick={() => setStep(2)} disabled={!selected.length}>Continue with {selected.length} interests <ArrowRight size={18} /></Button>
        </section>
      )}
      {step === 2 && (
        <section className="onboard-card">
          <div className="onboard-icon"><WalletCards /></div>
          <p className="kicker">SHOP YOUR WAY</p>
          <h1>What feels right?</h1>
          <p>These preferences help us prioritize the products you’ll be happiest to see.</p>
          <div className="preference-list">
            {["Budget-friendly", "Premium quality", "Minimalist", "Sustainable", "Practical", "Aesthetic"].map((x, i) => <label key={x}><input type="checkbox" defaultChecked={i === 0 || i === 2 || i === 5} /><span><Check size={15} /></span>{x}</label>)}
          </div>
          <div className="range-copy"><span>Comfortable product range</span><strong>$20 — $150</strong></div>
          <input className="range" type="range" min="20" max="300" defaultValue="150" />
          <Button onClick={() => setStep(3)}>Build my feed <Sparkles size={18} /></Button>
        </section>
      )}
      {step === 3 && (
        <section className="onboard-card ready">
          <div className="ready-stack">
            {products.slice(0, 3).map((p) => <img key={p.id} src={p.image} alt="" />)}
            <span><Check /></span>
          </div>
          <p className="kicker">ALL SET</p>
          <h1>Your feed is ready.</h1>
          <p>We found your first set of thoughtful recommendations. The more you swipe, the better it gets.</p>
          <Button onClick={onDone}>Start swiping <ArrowRight size={18} /></Button>
        </section>
      )}
      {step > 1 && <Button variant="ghost" className="back-link" onClick={() => setStep(step - 1)}><ArrowLeft size={17} /> Back</Button>}
    </main>
  );
}

function Sidebar({ page, setPage }: { page: Page; setPage: (page: Page) => void }) {
  return (
    <aside className="sidebar">
      <Logo />
      <nav>
        {nav.map(({ label, icon: Icon }) => (
          <Button key={label} variant="ghost" className={page === label ? "active" : ""} onClick={() => setPage(label)}>
            <Icon size={19} /> <span>{label}</span>{page === label && <i />}
          </Button>
        ))}
      </nav>
      <div className="sidebar-card">
        <Sparkles size={18} />
        <strong>Your taste is taking shape</strong>
        <p>12 swipes improved your recommendations this week.</p>
        <div><i style={{ width: "68%" }} /></div>
      </div>
      <div className="sidebar-user"><div>OM</div><span><strong>Olivia Martin</strong><small>Taste explorer</small></span><MoreHorizontal size={18} /></div>
    </aside>
  );
}

function Topbar({ onSearch }: { onSearch: () => void }) {
  return (
    <header className="topbar">
      <Button variant="secondary" className="search-button" onClick={onSearch}><Search size={18} /><span>What are you looking for?</span><kbd>⌘ K</kbd></Button>
      <div className="streak"><Zap size={16} fill="currentColor" /><strong>7</strong> day streak</div>
      <Button variant="icon" title="Messages"><MessageCircle size={19} /></Button>
    </header>
  );
}

function Discover({
  index,
  saved,
  onSwipe,
  onSave,
  onDetail,
  onReviews,
  onUndo,
}: {
  index: number;
  saved: number[];
  onSwipe: (direction: "left" | "right") => void;
  onSave: (product: Product) => void;
  onDetail: (product: Product) => void;
  onReviews: (product: Product) => void;
  onUndo: () => void;
}) {
  const product = products[index % products.length];
  const next = products[(index + 1) % products.length];
  const [motion, setMotion] = useState("");
  const swipe = (direction: "left" | "right") => {
    setMotion(direction);
    window.setTimeout(() => { onSwipe(direction); setMotion(""); }, 280);
  };
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") swipe("left");
      if (e.key === "ArrowRight") swipe("right");
    };
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  });

  return (
    <div className="discover-grid">
      <section className="feed">
        <div className="feed-heading">
          <div><p className="kicker">CURATED FOR YOU</p><h1>Today’s finds</h1></div>
          <span><Sparkles size={15} /> Feed tuned to your taste</span>
        </div>
        <div className="card-stage">
          <div className="product-card card-behind"><img src={next.image} alt="" /></div>
          <article className={`product-card ${motion ? `swipe-${motion}` : ""}`}>
            <div className="image-wrap">
              <img src={product.image} alt={product.name} />
              <span className="category">{product.category}</span>
              <span className="match"><Sparkles size={13} /> {product.match}% match <small>DEMO</small></span>
              {motion && <div className={`swipe-stamp ${motion}`}>{motion === "right" ? <><Heart fill="currentColor" /> YES, PLEASE</> : <><X /> NOT FOR ME</>}</div>}
            </div>
            <div className="product-copy">
              <div className="brand-row"><span>{product.brand}</span><button type="button" onClick={() => onSave(product)} className={saved.includes(product.id) ? "saved" : ""}><Bookmark size={19} fill={saved.includes(product.id) ? "currentColor" : "none"} /></button></div>
              <h2>{product.name}</h2>
              <div className="rating"><strong>${product.price}</strong><span><Star size={14} fill="currentColor" /> {product.rating} <small>({product.reviews.toLocaleString()})</small></span></div>
              <p>{product.description}</p>
              <div className="product-links">
                <Button variant="ghost" onClick={() => onDetail(product)}>Product details <ChevronRight size={15} /></Button>
                <Button variant="ghost" onClick={() => onReviews(product)}><MessageCircle size={15} /> Reviews</Button>
              </div>
            </div>
          </article>
        </div>
        <div className="swipe-controls">
          <Button variant="icon" onClick={onUndo} title="Undo"><RotateCcw size={18} /></Button>
          <Button variant="icon" className="nope" onClick={() => swipe("left")} title="Not interested"><X size={28} /></Button>
          <Button variant="icon" className="love" onClick={() => swipe("right")} title="Interested"><Heart size={27} fill="currentColor" /></Button>
          <Button variant="icon" onClick={() => onSave(product)} title="Save"><Bookmark size={18} /></Button>
          <Button variant="icon" title="Share"><Share2 size={18} /></Button>
        </div>
        <p className="keyboard-hint"><span>←</span> not for me <span>→</span> interested</p>
      </section>
      <aside className="insights">
        <div className="taste-card panel">
          <div className="panel-head"><span><Sparkles size={17} /> Your taste</span><small>LIVE</small></div>
          <h3>Warm minimalism</h3>
          <p>You’re leaning toward thoughtful design, soft neutrals, and useful details.</p>
          <div className="taste-tags"><span>Minimal</span><span>Neutral</span><span>Functional</span></div>
          <button type="button">See your taste profile <ArrowRight size={15} /></button>
        </div>
        <div className="budget-mini panel">
          <div className="panel-head"><span><WalletCards size={17} /> Wishlist budget</span><strong>$271 left</strong></div>
          <div className="budget-bar"><i style={{ width: "32%" }} /></div>
          <div><span>$129 planned</span><span>$400 goal</span></div>
        </div>
        <div className="panel friend-panel">
          <div className="panel-head"><span><Users size={17} /> Friends are loving</span><Button variant="ghost">View all</Button></div>
          <div className="friend-like"><img src={products[2].image} alt="" /><p><strong>Maya saved</strong><span>Cloudline Runners</span><small>12 min ago</small></p><Heart size={17} fill="currentColor" /></div>
          <div className="friend-like"><img src={products[1].image} alt="" /><p><strong>Alex liked</strong><span>Noma Glow Lamp</span><small>1 hr ago</small></p><Heart size={17} fill="currentColor" /></div>
        </div>
        <div className="tip"><Zap size={18} /><p><strong>Quick tip</strong><span>Use arrow keys to swipe faster.</span></p></div>
      </aside>
    </div>
  );
}

function Missions({ onDiscover }: { onDiscover: () => void }) {
  const [created, setCreated] = useState(false);
  return (
    <section className="page-content">
      <div className="page-title"><p className="kicker">SHOP WITH A PLAN</p><h1>What are we shopping for?</h1><p>Describe the outcome. We’ll turn it into a smart, budget-aware mission.</p></div>
      {!created ? (
        <>
          <div className="mission-prompt">
            <Sparkles />
            <textarea defaultValue="Decorate my college dorm for under $250" aria-label="Shopping mission" />
            <Button onClick={() => setCreated(true)}>Create mission <ArrowRight size={17} /></Button>
          </div>
          <p className="section-label">TRY AN IDEA</p>
          <div className="prompt-chips">
            {["Build a gaming setup under $500", "A birthday gift under $75", "A minimalist skincare routine", "Italian dinner for six"].map((x) => <Button variant="secondary" key={x} onClick={() => setCreated(true)}>{x}</Button>)}
          </div>
          <div className="mission-history">
            <div><Target /><p><strong>Cozy reading corner</strong><span>3 of 4 categories complete · $184 planned</span></p><Button variant="ghost">Continue <ArrowRight size={15} /></Button></div>
            <div><Check /><p><strong>Weekend hiking kit</strong><span>Completed last week · $126 total</span></p><Button variant="ghost">View list <ArrowRight size={15} /></Button></div>
          </div>
        </>
      ) : (
        <div className="mission-dashboard">
          <div className="mission-banner"><div><span className="kicker">ACTIVE MISSION</span><h2>Cozy College Dorm</h2><p>A warm, organized space that feels like home.</p></div><div className="mission-budget"><span>$112 remaining</span><strong>$138 <small>of $250</small></strong></div></div>
          <div className="mission-progress"><i style={{ width: "55%" }} /></div>
          <div className="category-checks">
            {["Bedding", "Lighting", "Storage", "Wall decor", "Desk accessories"].map((x, i) => <div key={x} className={i < 3 ? "done" : ""}><span>{i < 3 ? <Check size={16} /> : i + 1}</span><p><strong>{x}</strong><small>{i < 3 ? "Item selected" : "Still looking"}</small></p></div>)}
          </div>
          <div className="mission-items">
            {products.slice(0, 2).map((p) => <div key={p.id}><img src={p.image} alt="" /><span><strong>{p.name}</strong><small>{p.brand}</small></span><b>${p.price}</b><Button variant="icon"><X size={16} /></Button></div>)}
          </div>
          <Button onClick={onDiscover}>Continue discovering <ArrowRight size={17} /></Button>
        </div>
      )}
    </section>
  );
}

function Collections({ saved, onSave }: { saved: number[]; onSave: (p: Product) => void }) {
  const [created, setCreated] = useState(false);
  const collections = [
    { name: "Dream Space", count: 8 + saved.length, images: [products[1], products[3], products[0]] },
    { name: "Everyday Upgrades", count: 12, images: [products[2], products[0], products[3]] },
    { name: "Gifts for Friends", count: 5, images: [products[3], products[1], products[2]] },
  ];
  return (
    <section className="page-content">
      <div className="title-row"><div className="page-title"><p className="kicker">YOUR SAVED FINDS</p><h1>Collections</h1><p>Everything you love, beautifully organized.</p></div><Button onClick={() => setCreated(true)}><Plus size={17} /> New collection</Button></div>
      {created && <div className="new-collection"><input autoFocus aria-label="Collection name" defaultValue="Sunday favorites" /><Button onClick={() => setCreated(false)}>Create</Button><Button variant="ghost" onClick={() => setCreated(false)}>Cancel</Button></div>}
      <div className="collection-grid">
        {collections.map((c, i) => <article className="collection-card" key={c.name}>
          <div className="collage">{c.images.map((p) => <img key={p.id} src={p.image} alt="" />)}</div>
          <div><span><strong>{c.name}</strong><small>{c.count} items · ${i === 0 ? 482 : i === 1 ? 706 : 224} est.</small></span><MoreHorizontal /></div>
        </article>)}
        <button className="collection-add" type="button" onClick={() => setCreated(true)}><Plus /><strong>Create a collection</strong><span>Group your favorite finds</span></button>
      </div>
      {saved.length > 0 && <><p className="section-label">RECENTLY SAVED</p><div className="saved-row">{products.filter((p) => saved.includes(p.id)).map((p) => <div key={p.id}><img src={p.image} alt="" /><strong>{p.name}</strong><span>${p.price}</span><Button variant="ghost" onClick={() => onSave(p)}>Remove</Button></div>)}</div></>}
    </section>
  );
}

function Budget({ saved, remove }: { saved: number[]; remove: (p: Product) => void }) {
  const selected = products.filter((p) => saved.includes(p.id));
  const total = selected.reduce((sum, p) => sum + p.price, 129);
  const budget = 400;
  return (
    <section className="page-content">
      <div className="page-title"><p className="kicker">SPEND WITH INTENTION</p><h1>Your wishlist, your budget.</h1><p>A friendly snapshot of hypothetical spending. No real money involved.</p></div>
      <div className="budget-hero">
        <div><p>Wishlist value</p><strong>${total}</strong><span>of ${budget} comfort budget</span></div>
        <div className="ring" style={{ "--progress": `${Math.min(total / budget * 100, 100)}%` } as React.CSSProperties}><span><strong>{Math.round(total / budget * 100)}%</strong>used</span></div>
        <div className="remaining"><p>Remaining</p><strong>${Math.max(budget - total, 0)}</strong><Button variant="secondary">Adjust budget</Button></div>
      </div>
      {total > budget && <div className="warning"><CircleDollarSign /><p><strong>Your wishlist is ${total - budget} over budget.</strong><span>Try swapping one item for a smart alternative.</span></p><Button variant="secondary">Find alternatives</Button></div>}
      <div className="budget-columns">
        <div className="panel spend-breakdown"><h3>By category</h3>{[["Tech", 42], ["Home", 31], ["Fashion", 18], ["Beauty", 9]].map(([x, n]) => <div key={x}><span>{x}</span><i><b style={{ width: `${n}%` }} /></i><strong>{n}%</strong></div>)}</div>
        <div className="panel budget-products"><h3>Items in your wishlist</h3>{selected.length ? selected.map((p) => <div key={p.id}><img src={p.image} alt="" /><p><strong>{p.name}</strong><span>{p.brand}</span></p><b>${p.price}</b><Button variant="icon" onClick={() => remove(p)}><X size={15} /></Button></div>) : <div className="empty"><Bookmark /><p>Save a few products to see them here.</p></div>}</div>
      </div>
    </section>
  );
}

function Friends() {
  const [votes, setVotes] = useState([62, 38]);
  return (
    <section className="page-content">
      <div className="title-row"><div className="page-title"><p className="kicker">SOCIAL SHOPPING</p><h1>Good finds are better shared.</h1><p>See what your people love and decide together.</p></div><Button><Plus size={17} /> Invite friends</Button></div>
      <div className="social-grid">
        <div className="panel activity"><h3>Latest from your circle</h3>
          {[
            ["AM", "Alex saved a new find", "Noma Glow Lamp · 14 min ago"],
            ["MK", "Maya created a collection", "Spring reset · 1 hr ago"],
            ["JR", "Jordan matched with you", "You both saved Studio Pro · 3 hr ago"],
          ].map((a) => <div key={a[1]}><span>{a[0]}</span><p><strong>{a[1]}</strong><small>{a[2]}</small></p><Heart size={17} /></div>)}
        </div>
        <div className="panel compatibility"><span className="compat-score">84%</span><h3>You + Alex</h3><p>Very compatible taste</p><div><span>Tech</span><span>Streetwear</span><span>Minimal</span></div><small>Estimated demo compatibility</small></div>
        <div className="panel vote-card"><p className="kicker">MAYA NEEDS YOUR VOTE</p><h3>Which one for the new apartment?</h3><div className="vote-options">
          {products.slice(0, 2).map((p, i) => <button type="button" key={p.id} onClick={() => setVotes(i === 0 ? [63, 37] : [61, 39])}><img src={p.image} alt="" /><strong>{p.name}</strong><span>{votes[i]}%</span><i><b style={{ width: `${votes[i]}%` }} /></i></button>)}
        </div><small>24 friends voted</small></div>
      </div>
    </section>
  );
}

function Profile() {
  return (
    <section className="page-content">
      <div className="profile-hero"><div className="profile-avatar">OM</div><div><p className="kicker">YOUR SHOPPING DNA</p><h1>Olivia Martin</h1><p>Thoughtful finds, soft colors, practical details.</p></div><Button variant="secondary">Edit profile</Button></div>
      <div className="profile-stats"><div><strong>48</strong><span>Interested</span></div><div><strong>6</strong><span>Collections</span></div><div><strong>3</strong><span>Missions</span></div><div><strong>$20–150</strong><span>Sweet spot</span></div></div>
      <div className="profile-grid">
        <div className="panel taste-map"><h3>Your taste map</h3><div className="taste-orbit"><span>40%<small>Tech</small></span><i className="o1">30%<small>Home</small></i><i className="o2">20%<small>Fashion</small></i><i className="o3">10%<small>Other</small></i></div></div>
        <div className="panel preferences"><h3>Top signals</h3>{["Warm minimalism", "Under $100", "High customer ratings", "Sustainable materials"].map((x) => <div key={x}><Check size={16} />{x}</div>)}<Button variant="secondary">Tune preferences</Button></div>
      </div>
    </section>
  );
}

function Drawer({ product, type, onClose, onSave }: { product: Product; type: "details" | "reviews"; onClose: () => void; onSave: (p: Product) => void }) {
  return (
    <div className="drawer-backdrop" onMouseDown={onClose}>
      <aside className="drawer" onMouseDown={(e) => e.stopPropagation()}>
        <div className="drawer-top"><span>{type === "details" ? "PRODUCT DETAILS" : "REVIEW SNAPSHOT"}</span><Button variant="icon" onClick={onClose}><X size={19} /></Button></div>
        <img className="drawer-image" src={product.image} alt={product.name} />
        <div className="drawer-body">
          <span className="kicker">{product.brand} · {product.category}</span><h2>{product.name}</h2>
          <div className="rating"><strong>${product.price}</strong><span><Star size={14} fill="currentColor" /> {product.rating} ({product.reviews.toLocaleString()})</span></div>
          {type === "details" ? <>
            <p>{product.description}</p>
            <h3>Why it’s in your feed</h3><div className="ai-note"><Sparkles size={18} /><p>Recommended because you like minimalist design and usually save products under $100.<small>AI-generated demo explanation</small></p></div>
            <h3>Good to know</h3><ul><li>Free 30-day returns</li><li>Ships in 2–4 business days</li><li>Materials and care details available at retailer</li></ul>
          </> : <>
            <div className="ai-note"><Sparkles size={18} /><p>Buyers often praise the thoughtful design and everyday comfort. A few mention the finish can show wear over time.<small>AI-generated demo summary, not verified reviews</small></p></div>
            <div className="review-bars">{[[5, 78], [4, 14], [3, 6], [2, 2]].map(([s, n]) => <div key={s}><span>{s} <Star size={11} fill="currentColor" /></span><i><b style={{ width: `${n}%` }} /></i><small>{n}%</small></div>)}</div>
            <h3>What people mention</h3><div className="sentiments"><span><Check /> Beautiful finish</span><span><Check /> Easy to use</span><span><X /> Packaging</span></div>
          </>}
          <div className="drawer-actions"><Button onClick={() => onSave(product)}><Bookmark size={17} /> Save to collection</Button><Button variant="secondary">Visit retailer <ArrowRight size={17} /></Button></div>
        </div>
      </aside>
    </div>
  );
}

function SearchOverlay({ onClose, onSelect }: { onClose: () => void; onSelect: (p: Product) => void }) {
  const [query, setQuery] = useState("");
  const results = products.filter((p) => `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase()));
  return <div className="search-overlay"><div className="search-modal">
    <div className="search-input"><Search /><input autoFocus placeholder="What are you looking for?" value={query} onChange={(e) => setQuery(e.target.value)} /><Button variant="ghost" onClick={onClose}>ESC</Button></div>
    {!query && <div className="search-suggestions"><p className="section-label">POPULAR SEARCHES</p>{["Headphones under $100", "Minimal desk lamps", "Cute dorm decorations", "Sustainable sneakers"].map((x) => <Button key={x} variant="ghost" onClick={() => setQuery(x.split(" ")[0])}><Search size={15} />{x}<ArrowRight size={14} /></Button>)}</div>}
    {query && <div className="search-results">{results.length ? results.map((p) => <button type="button" key={p.id} onClick={() => onSelect(p)}><img src={p.image} alt="" /><span><strong>{p.name}</strong><small>{p.brand} · {p.category}</small></span><b>${p.price}</b><ChevronRight /></button>) : <div className="empty"><Search /><p>No exact matches yet. Try a broader search.</p></div>}</div>}
  </div></div>;
}

function AppShell() {
  const [page, setPage] = useState<Page>("Discover");
  const [index, setIndex] = useState(0);
  const [saved, setSaved] = useState<number[]>([]);
  const [lastIndex, setLastIndex] = useState<number | null>(null);
  const [drawer, setDrawer] = useState<{ product: Product; type: "details" | "reviews" } | null>(null);
  const [search, setSearch] = useState(false);
  const [toast, setToast] = useState("");
  const showToast = (text: string) => { setToast(text); window.setTimeout(() => setToast(""), 2200); };
  const save = (p: Product) => {
    const adding = !saved.includes(p.id);
    setSaved((s) => adding ? [...s, p.id] : s.filter((id) => id !== p.id));
    showToast(adding ? `${p.name} saved` : `${p.name} removed`);
  };
  const swipe = (direction: "left" | "right") => {
    setLastIndex(index);
    if (direction === "right" && !saved.includes(products[index % products.length].id)) setSaved((s) => [...s, products[index % products.length].id]);
    setIndex((i) => i + 1);
    showToast(direction === "right" ? "Saved to Interested" : "Feed updated");
  };
  useEffect(() => {
    const shortcut = (e: KeyboardEvent) => { if ((e.metaKey || e.ctrlKey) && e.key === "k") { e.preventDefault(); setSearch(true); } };
    window.addEventListener("keydown", shortcut); return () => window.removeEventListener("keydown", shortcut);
  }, []);
  const pageContent = useMemo(() => {
    if (page === "Discover") return <Discover index={index} saved={saved} onSwipe={swipe} onSave={save} onDetail={(p) => setDrawer({ product: p, type: "details" })} onReviews={(p) => setDrawer({ product: p, type: "reviews" })} onUndo={() => { if (lastIndex !== null) { setIndex(lastIndex); setLastIndex(null); showToast("Last swipe undone"); } }} />;
    if (page === "Missions") return <Missions onDiscover={() => setPage("Discover")} />;
    if (page === "Collections") return <Collections saved={saved} onSave={save} />;
    if (page === "Budget") return <Budget saved={saved} remove={save} />;
    if (page === "Friends") return <Friends />;
    return <Profile />;
  }, [page, index, saved, lastIndex]);
  return (
    <div className="app-shell">
      <Sidebar page={page} setPage={setPage} />
      <div className="app-main"><Topbar onSearch={() => setSearch(true)} />{pageContent}</div>
      <nav className="mobile-nav">{nav.slice(0, 5).map(({ label, icon: Icon }) => <button type="button" className={page === label ? "active" : ""} onClick={() => setPage(label)} key={label}><Icon /><span>{label === "Collections" ? "Saved" : label}</span></button>)}</nav>
      {drawer && <Drawer {...drawer} onClose={() => setDrawer(null)} onSave={save} />}
      {search && <SearchOverlay onClose={() => setSearch(false)} onSelect={(p) => { setDrawer({ product: p, type: "details" }); setSearch(false); }} />}
      {toast && <Toast text={toast} />}
    </div>
  );
}

export default function App() {
  const [stage, setStage] = useState<"landing" | "onboarding" | "app">("landing");
  if (stage === "landing") return <Landing onStart={() => setStage("onboarding")} />;
  if (stage === "onboarding") return <Onboarding onDone={() => setStage("app")} />;
  return <AppShell />;
}
