const request = require('request');
const fs = require('fs-extra');
const imageDownload = require('image-downloader');

let comics = require('./comics.json');

let categories;

const subjects = [
    'mes comics',
    'largo winch',
    'asterix',
    'xiii',
    'gaston',
    'tintin',
    'thorgal',
    'spirou',
    'blueberry',
    'lucky luke'
];

const charactersComicVineId = [
    '4005-64650', // Largo Winch
    '4005-19785', // asterix
    '4005-67617', // xiii
    '4005-17467', // gaston
    '4005-17079', // tintin
    '4005-52068', // thorgal
    '4005-38886', // spirou
    '4005-28524', // blueberry
    '4005-30131' // lucky luke
];

const volumesComicVineId = [
    '4050-12345', // mes comics
    '4050-31638', // largo winch
    '4050-74147', // asterix
    '4050-26986', // xiii
    '4050-116455', // gaston
    '4050-32164', // tintin
    '4050-40719', // thorgal
    '4050-27780', // spirou
    '4050-40586', // blueberry
    '4050-32180' // lucky luke
];

const prependUrlApi =
    'api_key=3ab3db0ca0e16aa122abe7d8e0c679778bd30c65&format=json';

let i = 1;

const loop = () => {
    console.log('loop: ', i, volumesComicVineId.length);

    if (i < volumesComicVineId.length) {
        request(
            `https://comicvine.gamespot.com/api/volume/${volumesComicVineId[i]}/?${prependUrlApi}`,
            function(error, response, body) {
                if (response.statusCode === 200) {
                    const issues = JSON.parse(body).results.issues.filter(
                        issue => issue.name != ''
                    );

                    let j = 0;

                    const loopIssue = () => {
                        console.log(issues[j].name);
                        request(
                            `${issues[j].api_detail_url}?${prependUrlApi}`,
                            function(error, response, body) {
                                if (response.statusCode === 200) {
                                    const originalIssue = JSON.parse(body)
                                        .results;

                                    let TPIssue = {
                                        date: originalIssue.cover_date,
                                        id: originalIssue.id,
                                        name: originalIssue.name,
                                        volumeId: originalIssue.volume.id,
                                        imageUrl: originalIssue.image.medium_url.replace(
                                            'https://comicvine.gamespot.com/api/image/scale_medium/',
                                            ''
                                        )
                                    };

                                    if (
                                        originalIssue.description &&
                                        originalIssue.description !== ''
                                    ) {
                                        TPIssue.description = originalIssue.description.replace(
                                            /<[^>]*>?/gm,
                                            ''
                                        );
                                    }

                                    comics = [...comics, TPIssue];

                                    console.log(
                                        'loopIssue j: ',
                                        j,
                                        issues.length
                                    );

                                    imageDownload
                                        .image({
                                            url: originalIssue.image.medium_url,
                                            dest: './issues_images'
                                        })
                                        .then(({ filename, image }) => {
                                            console.log(
                                                'Saved ',
                                                originalIssue.image.medium_url
                                            );

                                            if (j < issues.length - 1) {
                                                j++;
                                                loopIssue();
                                            } else {
                                                i++;
                                                loop();
                                            }
                                        })
                                        .catch(err => console.error(err));
                                }
                            }
                        );
                    };
                    loopIssue();
                }
            }
        );
    } else {
        console.log('writeData');
        writeData();
    }
};

categories = volumesComicVineId.map((volume) => parseInt(volume.replace('4050-', '')))
  .map((id, index) => ({name: subjects[index], id}));

writeData = () => {
    fs.writeJson('./comics.json', comics)
        .then(() => {
            console.log('success!');
        })
        .catch(err => {
            console.error(err);
        });

  fs.writeJson('./categories.json', categories)
    .then(() => {
      console.log('success!');
    })
    .catch(err => {
      console.error(err);
    });
};
