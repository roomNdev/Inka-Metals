import { defineMarkdocConfig, component } from '@astrojs/markdoc/config';
import pkg from '@markdoc/markdoc';
const { Tag, nodes } = pkg;

export default defineMarkdocConfig(
  {
    tags: {
        titulo: {
          render: component('@/components/Utils/Typografy/Titulo.astro'),
          attributes: {
            Color: {type: String, default:"var(--main-title)" }, 
            className: {type: String, default: 'text-xl font-semibold'},
            type: { type: String },
          },
        },
        tituloConLineas: {
          render: component('@/components/Utils/Typografy/TituloConLineas.astro'),
          attributes: {
            Color: {type: String, default:"var(--main-title)" },
            type: { type: String },
          },
        },
        texto: {
          render: component('@/components/Utils/Typografy/PortableText.astro'),
          attributes: {
            className: {type: String, default: "max-w-4xl text-center"},
            type: { type: String },
          },
        },
        tituloLineaVertical: {
          render: component('@/components/Utils/Typografy/TituloConSangria.astro'),
          attributes: {
            style: {type: String, default: `text-align: left; border-color: var(--main-title)}`},
            type: { type: String },
          },
        },
        imagen: {
          render: component('@/components/Utils/Imagen.astro'),
          attributes: {
            Redondeado: {type: Boolean, default: true},
            Url: {type: String}
          },
        },
        icono: {
          render: component('@/components/Utils/Icono.astro'),
          attributes: {
            Url: {type: String}
          },
        },
        columna: {
          render: component('@/components/Utils/Structure/ColumnaMdoc.astro'),
          transform(node, config) {
            const attributes = node.transformAttributes(config);
            const children = node.transformChildren(config);
            
            return new Tag(this.render, attributes, children);
          }
        },
        fila: {
          render: component('@/components/Utils/Structure/FilaMdoc.astro'),
          attributes: {
            columns: { type: Number }
          },
          transform(node, config) {
            const attributes = node.transformAttributes(config);
            const children = node.transformChildren(config);
            children.forEach(i => console.log(i, '-------children'))
            // Filter out only the columna tags
            const columns = children
            
            // If columns attribute is not provided, use the number of columna tags
            if (!attributes.columns) {
              attributes.columns = columns.length;
            }
        
            return new Tag(this.render, attributes, columns);
          }
      },
    }, 
    nodes: {
        table: {
          ...nodes.table,
          attributes: {
            class: {default: 'custom-table', type: String}
          },
          render: 'Table' // your custom component goes here
        },
      
      document: {
        attributes: {
          class: {default: 'flex flex-col items-center gap-16 mb-64', type: String}
        },
        render: 'Article'
      }
    }
  }
);
