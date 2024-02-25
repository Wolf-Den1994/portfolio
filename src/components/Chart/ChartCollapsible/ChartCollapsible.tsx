import * as am5 from '@amcharts/amcharts5';
import * as am5hierarchy from '@amcharts/amcharts5/hierarchy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';
import { useLayoutEffect } from 'react';
import './ChartCollapsible.scss';

type ChartCollapsibleProps = {
  data: {
    value: number;
    children: (
      | {
          name: string;
          value: number;
          children?: undefined;
        }
      | {
          name: string;
          value: number;
          children: {
            name: string;
            value: number;
          }[];
        }
    )[];
  };
};

export const ChartCollapsible = ({ data }: ChartCollapsibleProps) => {
  useLayoutEffect(() => {
    const root = am5.Root.new('chartdivcollapsible');

    root.setThemes([am5themesAnimated.new(root)]);

    const container = root.container.children.push(
      am5.Container.new(root, {
        width: am5.percent(100),
        height: am5.percent(100),
        layout: root.verticalLayout,
      }),
    );

    const series = container.children.push(
      am5hierarchy.ForceDirected.new(root, {
        singleBranchOnly: false,
        downDepth: 2,
        topDepth: 1,
        initialDepth: 1,
        valueField: 'value',
        categoryField: 'name',
        childDataField: 'children',
        idField: 'name',
        linkWithField: 'linkWith',
        manyBodyStrength: -10,
        centerStrength: 0.8,
      }),
    );

    series.get('colors')?.setAll({
      step: 2,
    });

    series.links.template.set('strength', 0.5);

    series.data.setAll([data]);

    series.set('selectedDataItem', series.dataItems[0]);

    series.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, []);

  return <div id="chartdivcollapsible" className="wow pulse" />;
};
