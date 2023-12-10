import Main from '../views/pages/main';
import Popular from '../views/pages/popular';
import NowPlaying from '../views/pages/nowPlaying';
import TopRated from '../views/pages/topRated';
import Upcoming from '../views/pages/upcoming';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';
import Search from '../views/pages/search';
import AllMovies from '../views/pages/allMovies';
import TV from '../views/pages/tv';
import People from '../views/pages/people';

const Routes = {
  '/': Main,
  '/main': Main,
  '/nowplaying': NowPlaying,
  '/toprated': TopRated,
  '/popular': Popular,
  '/upcoming': Upcoming,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/search/:id': Search,
  '/allmovies': AllMovies,
  '/tv': TV,
  '/people': People,
};

export default Routes;
