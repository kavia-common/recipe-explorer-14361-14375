import React, { useMemo, useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App renders the Recipe Explorer UI (navigation, search, recipe grid, and a detail drawer/modal placeholder).
 * This replaces the default CRA landing page to match the project's purpose.
 */
function App() {
  const [theme, setTheme] = useState('light');
  const [query, setQuery] = useState('');
  const [activeTag, setActiveTag] = useState('All');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Mock data to visualize the UI
  const recipes = useMemo(
    () => [
      {
        id: 1,
        title: 'Lemon Herb Roast Chicken',
        description: 'Juicy roast chicken with lemon, garlic, and fresh herbs.',
        time: 60,
        difficulty: 'Medium',
        tags: ['Dinner', 'Poultry'],
      },
      {
        id: 2,
        title: 'Creamy Mushroom Pasta',
        description: 'Silky cream sauce with sautéed mushrooms and parmesan.',
        time: 25,
        difficulty: 'Easy',
        tags: ['Dinner', 'Vegetarian', 'Pasta'],
      },
      {
        id: 3,
        title: 'Berry Overnight Oats',
        description: 'Healthy make-ahead breakfast with chia and mixed berries.',
        time: 10,
        difficulty: 'Easy',
        tags: ['Breakfast', 'Healthy', 'Vegetarian'],
      },
      {
        id: 4,
        title: 'Spicy Chickpea Curry',
        description: 'Vibrant curry with tomatoes, coconut, and warm spices.',
        time: 35,
        difficulty: 'Medium',
        tags: ['Dinner', 'Vegan', 'Gluten-Free'],
      },
      {
        id: 5,
        title: 'Grilled Salmon with Dill',
        description: 'Perfectly grilled salmon fillet with lemon and dill.',
        time: 20,
        difficulty: 'Easy',
        tags: ['Dinner', 'Seafood', 'Healthy'],
      },
      {
        id: 6,
        title: 'Chocolate Lava Cake',
        description: 'Decadent individual cakes with a molten center.',
        time: 30,
        difficulty: 'Hard',
        tags: ['Dessert', 'Baking'],
      },
    ],
    []
  );

  const allTags = useMemo(() => {
    const s = new Set(['All']);
    recipes.forEach(r => r.tags.forEach(t => s.add(t)));
    return Array.from(s);
  }, [recipes]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return recipes.filter(r => {
      const matchesQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.description.toLowerCase().includes(q) ||
        r.tags.some(t => t.toLowerCase().includes(q));
      const matchesTag = activeTag === 'All' || r.tags.includes(activeTag);
      return matchesQuery && matchesTag;
    });
  }, [recipes, query, activeTag]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="App" style={{ background: 'var(--bg-primary)' }}>
      {/* Top navigation */}
      <nav
        className="navbar"
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 20,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          background:
            theme === 'light'
              ? 'linear-gradient(to right, rgba(37,99,235,0.08), rgba(249,250,251,1))'
              : 'linear-gradient(to right, rgba(37,99,235,0.18), rgba(17,24,39,1))',
          borderBottom: '1px solid var(--border-color)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#2563EB' }}>
            Recipe Explorer
          </span>
          <span
            style={{
              fontSize: 12,
              color: 'var(--text-secondary)',
              letterSpacing: 0.4,
            }}
          >
            Browse. Search. Cook.
          </span>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title="Toggle theme"
            style={{
              backgroundColor: theme === 'light' ? '#2563EB' : '#F59E0B',
              color: '#fff',
            }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      </nav>

      {/* Hero/Search */}
      <section
        style={{
          padding: '24px',
          display: 'grid',
          gap: 16,
          background: 'var(--bg-secondary)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: 10,
            maxWidth: 980,
            margin: '0 auto',
            width: '100%',
          }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 24,
              color: 'var(--text-primary)',
              fontWeight: 700,
            }}
          >
            Discover your next favorite recipe
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 14,
              color: 'var(--text-primary)',
              opacity: 0.8,
            }}
          >
            Search by name, ingredient, or explore by tags.
          </p>

          <div
            style={{
              display: 'grid',
              gap: 10,
              gridTemplateColumns: '1fr',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: 8,
                padding: 8,
                background: 'var(--bg-primary)',
                borderRadius: 12,
                border: '1px solid var(--border-color)',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              }}
            >
              <input
                aria-label="Search recipes"
                placeholder="Search recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                  flex: 1,
                  border: 'none',
                  outline: 'none',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontSize: 14,
                  padding: '8px 10px',
                }}
              />
              <button
                onClick={() => setQuery('')}
                style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: 8,
                  background: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  padding: '8px 12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Clear
              </button>
            </div>

            {/* Tag filters */}
            <div
              role="tablist"
              aria-label="Recipe tags"
              style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}
            >
              {allTags.map((t) => {
                const active = t === activeTag;
                return (
                  <button
                    key={t}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTag(t)}
                    style={{
                      border: `1px solid ${
                        active ? '#2563EB' : 'var(--border-color)'
                      }`,
                      color: active ? '#2563EB' : 'var(--text-primary)',
                      background:
                        active
                          ? 'rgba(37,99,235,0.08)'
                          : 'var(--bg-primary)',
                      padding: '6px 12px',
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all .2s ease',
                    }}
                  >
                    {t}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Recipe Grid */}
      <main
        style={{
          padding: 24,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: 16,
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          }}
        >
          {filtered.map((r) => (
            <article
              key={r.id}
              aria-label={r.title}
              onClick={() => setSelectedRecipe(r)}
              style={{
                border: '1px solid var(--border-color)',
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                borderRadius: 12,
                padding: 16,
                display: 'grid',
                gap: 10,
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'transform .15s ease, box-shadow .15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow =
                  '0 6px 14px rgba(0,0,0,0.10)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow =
                  '0 2px 8px rgba(0,0,0,0.06)';
              }}
            >
              <div
                style={{
                  height: 130,
                  borderRadius: 10,
                  background:
                    'linear-gradient(135deg, rgba(37,99,235,.12), rgba(245,158,11,.10))',
                  border: '1px dashed var(--border-color)',
                }}
                aria-hidden
              />
              <header>
                <h3 style={{ margin: '8px 0 4px', fontSize: 16 }}>{r.title}</h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 13,
                    opacity: 0.8,
                    minHeight: 38,
                  }}
                >
                  {r.description}
                </p>
              </header>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <Badge>⏱ {r.time}m</Badge>
                <Badge>⚙️ {r.difficulty}</Badge>
                {r.tags.slice(0, 2).map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <button
                style={{
                  marginTop: 4,
                  border: '1px solid #2563EB',
                  color: '#2563EB',
                  background: 'rgba(37,99,235,0.06)',
                  borderRadius: 8,
                  padding: '8px 10px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                View Recipe
              </button>
            </article>
          ))}
        </div>
      </main>

      {/* Simple detail drawer/modal placeholder */}
      {selectedRecipe && (
        <DetailOverlay onClose={() => setSelectedRecipe(null)}>
          <RecipeDetails recipe={selectedRecipe} />
        </DetailOverlay>
      )}
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * Badge - small pill element for metadata.
 */
function Badge({ children }) {
  return (
    <span
      style={{
        fontSize: 11,
        fontWeight: 600,
        padding: '4px 8px',
        borderRadius: 999,
        background: 'var(--bg-secondary)',
        color: 'var(--text-primary)',
        border: '1px solid var(--border-color)',
      }}
    >
      {children}
    </span>
  );
}

/**
 * PUBLIC_INTERFACE
 * DetailOverlay - lightweight overlay for showing recipe details.
 */
function DetailOverlay({ children, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.4)',
        display: 'grid',
        placeItems: 'center',
        padding: 20,
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          width: 'min(720px, 96vw)',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-color)',
          borderRadius: 12,
          boxShadow: '0 10px 24px rgba(0,0,0,0.25)',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 14,
            borderBottom: '1px solid var(--border-color)',
            background:
              'linear-gradient(90deg, rgba(37,99,235,0.08), transparent)',
          }}
        >
          <strong>Recipe Details</strong>
          <button
            onClick={onClose}
            aria-label="Close details"
            style={{
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              borderRadius: 8,
              padding: '6px 10px',
              cursor: 'pointer',
              fontWeight: 700,
            }}
          >
            ✕
          </button>
        </div>
        <div style={{ padding: 16 }}>{children}</div>
      </div>
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * RecipeDetails - static detail view using the selected recipe mock.
 */
function RecipeDetails({ recipe }) {
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <div
        aria-hidden
        style={{
          height: 180,
          borderRadius: 10,
          background:
            'linear-gradient(135deg, rgba(37,99,235,.12), rgba(245,158,11,.10))',
          border: '1px dashed var(--border-color)',
        }}
      />
      <h2 style={{ margin: '0 0 4px' }}>{recipe.title}</h2>
      <p style={{ margin: 0, opacity: 0.8 }}>{recipe.description}</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Badge>⏱ {recipe.time} minutes</Badge>
        <Badge>⚙️ {recipe.difficulty}</Badge>
        {recipe.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <section style={{ marginTop: 8 }}>
        <h3 style={{ margin: '12px 0 8px', fontSize: 16 }}>Ingredients</h3>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>1 tbsp olive oil</li>
          <li>2 cloves garlic, minced</li>
          <li>Salt and pepper to taste</li>
        </ul>
      </section>
      <section>
        <h3 style={{ margin: '12px 0 8px', fontSize: 16 }}>Instructions</h3>
        <ol style={{ margin: 0, paddingLeft: 18 }}>
          <li>Prepare all ingredients and preheat as needed.</li>
          <li>Cook following preferred method and time.</li>
          <li>Plate, garnish, and enjoy!</li>
        </ol>
      </section>
    </div>
  );
}

export default App;
