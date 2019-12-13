export default {
  id: 'immigrant',
  type: 'http-get',
  dependent: 'none',
  resettable: false,
  url: 'https://phl.carto.com:443/api/v2/sql',
  options: {
    params: {
      q: 'select * from oia_services where hide_on_finder is null or hide_on_finder::text in (\'FALSE\', \'false\')',
    },
  },
};
