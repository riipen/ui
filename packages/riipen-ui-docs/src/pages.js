const pages = [
  {
    pathname: "/getting-started"
  },
  {
    pathname: "/components",
    children: [
      {
        pathname: "/components",
        children: [{ pathname: "/components/progress-bar" }]
      }
    ]
  }
];

export default pages;
