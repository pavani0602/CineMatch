import MovieGrid from '../../components/MovieGrid/MovieGrid.jsx';
import  {useNavigate} from 'react-router-dom';
import './Home.css';

function Home(props) {
    const navigate = useNavigate();
    const {movies, favorites, onAddToFavorites, onRemoveFromFavorites} = props;

    return (
        <main className="home-page">
        <section className="hero">
            {/* Background Canvas Layer */}
            <img src="/hero-img.png" alt="Cinematic movie scene" className="hero-image" />
            
            {/* Shadow Mask Layer */}
            <div className="hero-gradient-overlay"></div>

            {/* Floating Text Stack */}
            <div className="hero-content">
            <p className="hero-eyebrow">YOUR NEXT FAVORITE FILM AWAITS</p>
            <h1>Find your next <span>Obsession.</span></h1>
            <p className="hero-description">
                Discover movies worth watching, save the ones you love, and build your own personal movie collection.
            </p>
            <button 
            className="hero-button" 
            onClick={() => navigate('/discover')}
          >
            Explore Movies →
          </button>

            </div>
        </section>

        <section className="trending-section">
            <div className="section-heading">
                <div>
                    <p className="section-eyebrow">HANDPICKED FOR YOU</p>
                    <h2>Trending Movies</h2>
                </div>

                <a href="/discover" className="view-all-link">
                View all →
                </a>
            </div>

            <MovieGrid
                movies={movies}
                favorites={favorites}
                onAddToFavorites={onAddToFavorites}
                onRemoveFromFavorites={onRemoveFromFavorites}
            />
        </section>

        <section className="genre-section">
            <div className="section-heading">
                <div>
                    <p className="section-eyebrow">EXPLORE BY GENRE</p>
                    <h2>Explore movies by mood.</h2>
                </div>
                <p className="section-subtitle-right">Find the perfect movie for your mood.</p>
            </div>

            {/* 4-column premium genre deck layout */}
            <div className="genre-grid">
                
                {/* Card 1: Action */}
                <div className="genre-card" onClick={() => navigate('/discover?genre=action')}>
                    <img src="/public/action-bg.png" alt="Action" className="genre-card-bg" />
                    <div className="genre-card-overlay"></div>
                    <div className="genre-card-content">
                        <span className="genre-icon">⚔️</span>
                        <div className="genre-text">
                            <h3 className="genre-name">Action</h3>
                            <p className="genre-desc">Explosive adventures</p>
                        </div>
                    </div>
                    <div className="genre-arrow-btn">→</div>
                </div>

                {/* Card 2: Romance */}
                <div className="genre-card" onClick={() => navigate('/discover?genre=romance')}>
                    <img src="/public/romance-bg.png" alt="Romance" className="genre-card-bg" />
                    <div className="genre-card-overlay"></div>
                    <div className="genre-card-content">
                        <span className="genre-icon">❤️</span>
                        <div className="genre-text">
                            <h3 className="genre-name">Romance</h3>
                            <p className="genre-desc">Stories of love</p>
                        </div>
                    </div>
                    <div className="genre-arrow-btn">→</div>
                </div>

                {/* Card 3: Thriller */}
                <div className="genre-card" onClick={() => navigate('/discover?genre=thriller')}>
                    <img src="/public/thriller-bg.png" alt="Thriller" className="genre-card-bg" />
                    <div className="genre-card-overlay"></div>
                    <div className="genre-card-content">
                        <span className="genre-icon">👁️</span>
                        <div className="genre-text">
                            <h3 className="genre-name">Thriller</h3>
                            <p className="genre-desc">Mysteries and suspense</p>
                        </div>
                    </div>
                    <div className="genre-arrow-btn">→</div>
                </div>

                {/* Card 4: Comedy */}
                <div className="genre-card" onClick={() => navigate('/discover?genre=comedy')}>
                    <img src="/public/comedy-bg.png" alt="Comedy" className="genre-card-bg" />
                    <div className="genre-card-overlay"></div>
                    <div className="genre-card-content">
                        <span className="genre-icon">😀</span>
                        <div className="genre-text">
                            <h3 className="genre-name">Comedy</h3>
                            <p className="genre-desc">Feel-good entertainment</p>
                        </div>
                    </div>
                    <div className="genre-arrow-btn">→</div>
                </div>

            </div>
        </section>



        </main>
    );
}

export default Home;
