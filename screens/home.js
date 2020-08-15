import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Dimensions, StatusBar, ImageBackground, TextInput, FlatList } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Carousel from 'react-native-anchor-carousel'
import { FontAwesome5, Feather, MaterialIcons } from '@expo/vector-icons'




const Home = () => {

    const [background, setBackground] = useState({
        uri: 'https://image.freepik.com/free-vector/business-candle-stick-graph-chart-stock-market-investment-trading-blue-background_62391-93.jpg',
        name: 'SEO',
        stat: '2020',
        desc: 'Aliquip do proident est eu incididunt voluptate quis nostrud quis qui aliquip fugiat nisi dolore. Sit nisi Lorem incididunt commodo dolor sit irure irure et. Ex occaecat excepteur magna in enim ex anim mollit sint in qui aliqua aliquip. '
    })

    const [gallery, setgallery] = useState([

        {
            image: 'https://u2ln88sd1r2m98ei4boqdgd0-wpengine.netdna-ssl.com/wp-content/uploads/2018/07/seo-icon.png',
            title: 'SEO',
            release: '2020',
            key: '1',
            desc: 'Aliquip exercitation ullamco labore ex Lorem sint est incididunt do laboris minim. Magna consectetur non nostrud qui pariatur ea in ut amet aute culpa commodo eiusmod. Commodo cupidatat ut elit pariatur esse pariatur ullamco. Id qui dolore dolor tempor sit nulla tempor id aute ex amet quis. Culpa consectetur cupidatat laboris ipsum. Elit ipsum aliqua pariatur cillum et amet.',
        },

        {
            image: 'https://previews.123rf.com/images/garagestock/garagestock1905/garagestock190500367/122032559-direct-marketing-icon-concept.jpg',
            title: 'DM',
            release: '2020',
            key: '2',
            desc: 'Veniam minim deserunt pariatur occaecat cupidatat. Aliqua aliqua cupidatat velit enim duis magna est sit. Eiusmod nostrud fugiat occaecat qui laborum mollit anim anim eiusmod. Mollit sunt excepteur qui ullamco aute voluptate occaecat id excepteur minim ut.',
        },

        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkA1QKeb5_ZqcOnRBLhovm8gqZhw48pvjWcyZ3P6RRpTRwgO4&s',
            title: 'BLOG',
            release: '2020',
            key: '3',
            desc: 'Adipisicing laboris laboris adipisicing aliqua enim incididunt deserunt labore. Quis anim est cillum qui enim exercitation nisi ea nisi Lorem exercitation tempor elit fugiat. Amet et incididunt elit dolore quis esse Lorem esse velit nulla dolor. Voluptate nostrud sit amet ullamco et ea nulla reprehenderit tempor laborum ipsum. Proident magna labore irure sit qui culpa duis ea cillum dolor exercitation.',
        },

        {
            image: 'https://thumbs.dreamstime.com/b/case-study-thin-line-icon-sign-symbol-illustation-linear-concept-vector-case-study-thin-line-icon-sign-symbol-illustation-linear-115181405.jpg',
            title: 'CASE STUDY',
            release: '2020',
            key: '4',
            desc: 'Incididunt officia enim mollit irure. Et est nulla tempor culpa velit elit cillum nulla. Incididunt exercitation anim voluptate ex deserunt esse ullamco.',
        }
    ]);

    const carouselRef = useRef(null);

    const { width, height } = Dimensions.get('window');

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    onPress={() => {
                        carouselRef.current.scrollToIndex(index);
                        setBackground({
                            uri: item.image,
                            name: item.title,
                            stat: item.release,
                            desc: item.desc
                            
                        })
                    }}
                >
                    <Image source={{ uri: item.image }} style={styles.carouselImage} />
                    <Text style={styles.carouselText}>{item.title}</Text>
                    <MaterialIcons name='library-add' size={30} color='white' style={styles.carouselIcon} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <ScrollView >
            <View style={styles.carouselContentContainer}>
                <View style={{ ...StyleSheet.absoluteFill, backgroundColor: '#000' }}>
                    <ImageBackground
                        source={{ uri: background.uri }}
                        style={styles.ImageBg}
                        blurRadius={10}
                    >
                        <View style={styles.searchBoxContainer}>
                            <TextInput
                                placeholder='    Search Topics'
                                placeholderTextColor='#666'
                            />
                            <Feather name='search' size={22} color='#666' style={styles.searchBoxIcon} />
                        </View>
                        <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold', marginLeft: 20, marginVertical: 10 }}>Topics included</Text>
                        <View style={styles.carouselContainerView}>
                            <Carousel style={styles.Carousel}
                                data={gallery}
                                renderItem={renderItem}
                                itemWidth={200}
                                containerWidth={width - 20}
                                seperatorWidth={0}
                                ref={carouselRef}
                                inActiveOpacity={0.4}
                            />
                        </View>

                        <View style={styles.movieInfocontainer}>
                            <View style={{ justifyContent: 'center' }}>
                                <Text style={styles.movieName}>{background.name}</Text>
                                <Text style={styles.movieStat}>{background.stat}</Text>
                            </View>
                            <TouchableOpacity style={styles.playIconContainer}>
                                <FontAwesome5 name='play' size={22} color='#02ad94' style={{ marginLeft: 4 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ paddingHorizontal: 14, marginTop: 14 }}>
                            <Text style={{ color: 'black', opacity: 0.8, lineHeight: 20 }}>{background.desc}</Text>
                        </View>

                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    carouselContentContainer: {

        flex: 1,
        backgroundColor: '#000',
        height: 720,
        paddingHorizontal: 14
    },
    ImageBg: {
        flex: 1,
        height: null,
        width: null,
        opacity: 1,
        justifyContent: 'flex-start'

    },
    searchBoxContainer: {
        backgroundColor: '#fff',
        elevation: 20,
        borderRadius: 10,
        marginVertical: 35,
        width: '95%',
        flexDirection: 'row',
        alignSelf: "center"
    },
    SearchBox: {
        padding: 20,
        paddingLeft: 20,
        fontSize: 16
    },
    searchBoxIcon: {
        position: 'absolute',
        right: 20,
        top: 2
    },
    carouselContainerView: {
        width: '100%',
        height: 350,
        justifyContent: 'center',
        alignItems: 'center'
    },
    Carousel: {
        flex: 1,
        overflow: 'visible'
    },
    carouselImage: {
        width: 200,
        height: 320,
        borderRadius: 50,
        alignSelf: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    carouselText: {
        padding: 14,
        color: 'red',
        position: 'absolute',
        bottom: 10,
        left: 20,
        fontWeight: 'bold',

    },
    carouselIcon: {
        position: 'absolute',
        top: 15,
        right: 15
    },
    movieInfocontainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        width: Dimensions.get('window').width - 14
    },
    movieName: {
        paddingLeft: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 6
    },
    movieStat: {
        paddingLeft: 14,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 14,
        opacity: 0.8
    },
    playIconContainer: {
        backgroundColor: '#212121',
        padding: 18,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        borderWidth: 4,
        borderColor: 'rgba(2,173,148,0.2)',
        marginBottom: 14
    }

})
export default Home;
