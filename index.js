const renderTemplate = async () => {
    try {
      const response = await fetch('data.json');
      const data = await response.json();
      
      const source = document.getElementById('template').innerHTML;
      const template = Handlebars.compile(source);
      const renderedTemplate = template(data);
      
      const root = document.getElementById('root');
      root.innerHTML = renderedTemplate;
    } catch (error) {
      console.error('Error rendering template:', error);
    }
  };
  
  renderTemplate();
  