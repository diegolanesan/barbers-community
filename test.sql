--
-- PostgreSQL database dump
--

-- Dumped from database version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.7 (Ubuntu 12.7-0ubuntu0.20.04.1)

-- Started on 2021-06-14 10:32:00 -05

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 658 (class 1247 OID 89220)
-- Name: enum_appointments_status; Type: TYPE; Schema: public; Owner: alex
--

CREATE TYPE public.enum_appointments_status AS ENUM (
    'Pending',
    'Approved',
    'Cancel',
    'Delete'
);


ALTER TYPE public.enum_appointments_status OWNER TO alex;

--
-- TOC entry 560 (class 1247 OID 89182)
-- Name: enum_barbers_type; Type: TYPE; Schema: public; Owner: alex
--

CREATE TYPE public.enum_barbers_type AS ENUM (
    'Urban',
    'Academy',
    'Hair technician',
    'Seminary'
);


ALTER TYPE public.enum_barbers_type OWNER TO alex;

--
-- TOC entry 698 (class 1247 OID 89330)
-- Name: enum_users_tipo; Type: TYPE; Schema: public; Owner: alex
--

CREATE TYPE public.enum_users_tipo AS ENUM (
    'cliente',
    'admin',
    'clientePremium'
);


ALTER TYPE public.enum_users_tipo OWNER TO alex;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 206 (class 1259 OID 89229)
-- Name: appointments; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.appointments (
    date timestamp with time zone NOT NULL,
    status public.enum_appointments_status NOT NULL,
    total double precision NOT NULL,
    "barberId" integer NOT NULL,
    "clientId" integer NOT NULL
);


ALTER TABLE public.appointments OWNER TO alex;

--
-- TOC entry 203 (class 1259 OID 89193)
-- Name: barbers; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.barbers (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image character varying(255)[] DEFAULT ARRAY['https://imagenurl'::character varying(255)] NOT NULL,
    mobile character varying(255) NOT NULL,
    location character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    status boolean NOT NULL,
    alias character varying(255) NOT NULL,
    resume character varying(255) NOT NULL,
    bio character varying(255) NOT NULL,
    rating integer NOT NULL,
    type public.enum_barbers_type NOT NULL
);


ALTER TABLE public.barbers OWNER TO alex;

--
-- TOC entry 202 (class 1259 OID 89191)
-- Name: barbers_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.barbers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.barbers_id_seq OWNER TO alex;

--
-- TOC entry 3184 (class 0 OID 0)
-- Dependencies: 202
-- Name: barbers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.barbers_id_seq OWNED BY public.barbers.id;


--
-- TOC entry 208 (class 1259 OID 89246)
-- Name: categories; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255)[] DEFAULT ARRAY['https://imagenurl'::character varying(255)] NOT NULL
);


ALTER TABLE public.categories OWNER TO alex;

--
-- TOC entry 207 (class 1259 OID 89244)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO alex;

--
-- TOC entry 3185 (class 0 OID 0)
-- Dependencies: 207
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 223 (class 1259 OID 89348)
-- Name: categoryService; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."categoryService" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "serviceId" integer NOT NULL,
    "categoryId" integer NOT NULL
);


ALTER TABLE public."categoryService" OWNER TO alex;

--
-- TOC entry 205 (class 1259 OID 89207)
-- Name: clients; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.clients (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    lastname character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    image character varying(255)[] DEFAULT ARRAY['https://imagenurl'::character varying(255)] NOT NULL,
    mobile integer NOT NULL,
    location character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    status boolean NOT NULL
);


ALTER TABLE public.clients OWNER TO alex;

--
-- TOC entry 204 (class 1259 OID 89205)
-- Name: clients_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.clients_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.clients_id_seq OWNER TO alex;

--
-- TOC entry 3186 (class 0 OID 0)
-- Dependencies: 204
-- Name: clients_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.clients_id_seq OWNED BY public.clients.id;


--
-- TOC entry 210 (class 1259 OID 89258)
-- Name: detailAppointments; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."detailAppointments" (
    id integer NOT NULL,
    "idAppointment" integer NOT NULL,
    "idService" integer NOT NULL,
    price double precision NOT NULL
);


ALTER TABLE public."detailAppointments" OWNER TO alex;

--
-- TOC entry 209 (class 1259 OID 89256)
-- Name: detailAppointments_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."detailAppointments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."detailAppointments_id_seq" OWNER TO alex;

--
-- TOC entry 3187 (class 0 OID 0)
-- Dependencies: 209
-- Name: detailAppointments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."detailAppointments_id_seq" OWNED BY public."detailAppointments".id;


--
-- TOC entry 224 (class 1259 OID 89363)
-- Name: faceTypeBarber; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."faceTypeBarber" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "barberId" integer NOT NULL,
    "faceTypeId" integer NOT NULL
);


ALTER TABLE public."faceTypeBarber" OWNER TO alex;

--
-- TOC entry 212 (class 1259 OID 89266)
-- Name: faceTypes; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."faceTypes" (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public."faceTypes" OWNER TO alex;

--
-- TOC entry 211 (class 1259 OID 89264)
-- Name: faceTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."faceTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."faceTypes_id_seq" OWNER TO alex;

--
-- TOC entry 3188 (class 0 OID 0)
-- Dependencies: 211
-- Name: faceTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."faceTypes_id_seq" OWNED BY public."faceTypes".id;


--
-- TOC entry 225 (class 1259 OID 89378)
-- Name: hairTypeBarber; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."hairTypeBarber" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "barberId" integer NOT NULL,
    "hairTypeId" integer NOT NULL
);


ALTER TABLE public."hairTypeBarber" OWNER TO alex;

--
-- TOC entry 214 (class 1259 OID 89274)
-- Name: hairTypes; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."hairTypes" (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public."hairTypes" OWNER TO alex;

--
-- TOC entry 213 (class 1259 OID 89272)
-- Name: hairTypes_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public."hairTypes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."hairTypes_id_seq" OWNER TO alex;

--
-- TOC entry 3189 (class 0 OID 0)
-- Dependencies: 213
-- Name: hairTypes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public."hairTypes_id_seq" OWNED BY public."hairTypes".id;


--
-- TOC entry 217 (class 1259 OID 89292)
-- Name: serviceBarbers; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."serviceBarbers" (
    price character varying(255) NOT NULL,
    image character varying(255)[] DEFAULT ARRAY['https://imagenurl'::character varying(255)] NOT NULL,
    "barberId" integer NOT NULL,
    "serviceId" integer NOT NULL
);


ALTER TABLE public."serviceBarbers" OWNER TO alex;

--
-- TOC entry 216 (class 1259 OID 89282)
-- Name: services; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.services (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price character varying(255) NOT NULL,
    description character varying(255) NOT NULL,
    image character varying(255)[] DEFAULT ARRAY['https://imagenurl'::character varying(255)] NOT NULL
);


ALTER TABLE public.services OWNER TO alex;

--
-- TOC entry 215 (class 1259 OID 89280)
-- Name: services_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.services_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.services_id_seq OWNER TO alex;

--
-- TOC entry 3190 (class 0 OID 0)
-- Dependencies: 215
-- Name: services_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.services_id_seq OWNED BY public.services.id;


--
-- TOC entry 226 (class 1259 OID 89393)
-- Name: styleBarber; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public."styleBarber" (
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "barberId" integer NOT NULL,
    "styleId" integer NOT NULL
);


ALTER TABLE public."styleBarber" OWNER TO alex;

--
-- TOC entry 219 (class 1259 OID 89313)
-- Name: styles; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.styles (
    id integer NOT NULL,
    description character varying(255) NOT NULL
);


ALTER TABLE public.styles OWNER TO alex;

--
-- TOC entry 218 (class 1259 OID 89311)
-- Name: styles_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.styles_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.styles_id_seq OWNER TO alex;

--
-- TOC entry 3191 (class 0 OID 0)
-- Dependencies: 218
-- Name: styles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.styles_id_seq OWNED BY public.styles.id;


--
-- TOC entry 220 (class 1259 OID 89319)
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.subscriptions (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    price integer NOT NULL,
    category character varying(255) NOT NULL
);


ALTER TABLE public.subscriptions OWNER TO alex;

--
-- TOC entry 222 (class 1259 OID 89339)
-- Name: users; Type: TABLE; Schema: public; Owner: alex
--

CREATE TABLE public.users (
    id integer NOT NULL,
    nombre character varying(255) NOT NULL,
    "contraseña" character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    tipo public.enum_users_tipo NOT NULL
);


ALTER TABLE public.users OWNER TO alex;

--
-- TOC entry 221 (class 1259 OID 89337)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: alex
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO alex;

--
-- TOC entry 3192 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alex
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 2964 (class 2604 OID 89196)
-- Name: barbers id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.barbers ALTER COLUMN id SET DEFAULT nextval('public.barbers_id_seq'::regclass);


--
-- TOC entry 2968 (class 2604 OID 89249)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 2966 (class 2604 OID 89210)
-- Name: clients id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.clients ALTER COLUMN id SET DEFAULT nextval('public.clients_id_seq'::regclass);


--
-- TOC entry 2970 (class 2604 OID 89261)
-- Name: detailAppointments id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."detailAppointments" ALTER COLUMN id SET DEFAULT nextval('public."detailAppointments_id_seq"'::regclass);


--
-- TOC entry 2971 (class 2604 OID 89269)
-- Name: faceTypes id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."faceTypes" ALTER COLUMN id SET DEFAULT nextval('public."faceTypes_id_seq"'::regclass);


--
-- TOC entry 2972 (class 2604 OID 89277)
-- Name: hairTypes id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."hairTypes" ALTER COLUMN id SET DEFAULT nextval('public."hairTypes_id_seq"'::regclass);


--
-- TOC entry 2973 (class 2604 OID 89285)
-- Name: services id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.services ALTER COLUMN id SET DEFAULT nextval('public.services_id_seq'::regclass);


--
-- TOC entry 2976 (class 2604 OID 89316)
-- Name: styles id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.styles ALTER COLUMN id SET DEFAULT nextval('public.styles_id_seq'::regclass);


--
-- TOC entry 2977 (class 2604 OID 89342)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 3158 (class 0 OID 89229)
-- Dependencies: 206
-- Data for Name: appointments; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.appointments (date, status, total, "barberId", "clientId") FROM stdin;
\.


--
-- TOC entry 3155 (class 0 OID 89193)
-- Dependencies: 203
-- Data for Name: barbers; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.barbers (id, name, lastname, email, image, mobile, location, password, status, alias, resume, bio, rating, type) FROM stdin;
1	Jorge	Murillo	alo@leano.at	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/jorge_o3tsir.jpg}	02645410738	Cali, Colombia	clave123	t	Colombian Barber	Especialista en servicios de barberia	Educador y profesional	5	Academy
2	Pablo	Lescano	pablo@lescano.ar	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562800/Barbers/32_cjcpzm.jpg}	02645410738	Buenos Aires, Argentina	demo123	t	Argentino Barber	Especialista en servicios de barberia	Educador y profesional	5	Academy
3	Ricardo	Morales	ricardo@morales.ar	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/31_gvd74w.jpg}	02645410738	Buenos aires, Argentina	clave123	t	Panama Barber	Especialista en servicios de barberia	Educador y profesional	5	Seminary
4	Lorenzo	Rivas	lorenzo@rivas.ar	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/30_nc3uzy.jpg}	02645410738	Colorado, USA	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Urban
5	Miguel	Lescano	miguel@lescano.ar	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563408/Barbers/29_zjimim.jpg}	02645410738	Colorado, USA	clave123	t	Brazil Barber	Especialista en servicios de barberia	Educador y profesional	5	Academy
6	Freddy	Perez	freddy@perez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562802/Barbers/28_j8p1go.jpg}	02645410738	Colorado, USA	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
7	Gerardo	Alzate	gerardo@alzate.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563789/Barbers/27_vxrkw6.jpg}	02645410738	Colorado, USA	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
8	Milena	Salamanca	milena@salamanca.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623563416/Barbers/26_zzrh1w.jpg}	02645410738	Colorado, USA	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
9	Maria Camila	Kuba	camila@kuba.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/25_cllcsp.jpg}	02645410738	Cordoba, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
10	Lorena	Solarte	maria@solarte.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/24_uflsju.jpg}	02645410738	Cordoba, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
11	Jose Miguel	Buenaora	josemiguel@buenahora.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/23_prjgkc.jpg}	02645410738	Cordoba, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
12	Delia	Tellez	sandra@tellez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562801/Barbers/22_hevpdb.jpg}	02645410738	Barranquilla, Colombia	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
13	Lorenzo	Figueroa	lorenzo@figueroa.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/21_fraryq.jpg}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
14	Nicolas	Mora	nicolas@mora.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/20_xwde4k.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
15	Arturo	Arrechea	arturo@arrechea.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/19_aw457q.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
16	Tirso	Lopez	tirso@lopez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562799/Barbers/18_igfc9e.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
17	Samuel	Benavidez	sam@benavidez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/17_olfxnz.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
18	Marcos	Hernandez	marcos@hernandez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562796/Barbers/16_ni6xus.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
19	Danilo	Correa	danilo@correa.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/15_gaunpw.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
20	Nariño	Santofimio	narino@santofimio.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/14_lbzzer.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
21	Carlos	Gonzalez	carlos@gonzalez.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562794/Barbers/13_cd9khp.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
22	Camilo	Debia	camilo@debia.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562797/Barbers/12_iw4tn8.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
23	Joseph	Keiroz	josep@debia.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562803/Barbers/11_ta3pfh.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
24	Huberto	Escobar	humberto@escobar.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/10_ntddef.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
25	Marino	Marin	marino@marin.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/09_eqzv6a.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
26	Nicolas	Santa	nicolas@santa.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/08_uafvyv.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
27	Alberto	Bolaños	alberto@bolaños.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/07_htdb3o.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
28	Pedro	Orozco	pedro@orozco.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562804/Barbers/06_ltjlyv.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
29	mauricio	torrente	mauricio@torrente.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/05_c0e55p.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
30	Pedro	Dimaria	peedro@escobar.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562806/Barbers/04_iv7j5e.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
31	Luis	Armani	franco@armani.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562805/Barbers/03_azcsxr.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
32	Ernesto	Mejia	ernesto@mejia.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562795/Barbers/02_n1deq5.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
33	Teofilo	Usurriaga	teofilo@usuariaga.com	{https://res.cloudinary.com/doovf5g5c/image/upload/v1623562798/Barbers/01_n67awf.png}	02645410738	Mar de plata, Argentina	clave123	t	American Barber	Especialista en servicios de barberia	Educador y profesional	5	Hair technician
\.


--
-- TOC entry 3160 (class 0 OID 89246)
-- Dependencies: 208
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.categories (id, name, description, image) FROM stdin;
1	HAIRCUT	CORTE DE CABELLO	{IMAGE1,image2}
2	BEARDCUT	ARREGLO DE BARBA	{IMAGE1,image2}
3	KIDHAIRCUT	CORTE DE NIÑOS	{IMAGE1,image2}
4	HAIRCOLOR	COLORACION DE CABELLO	{IMAGE1,image2}
5	DESIGN	CORTE ARTISTICO	{IMAGE1,image2}
6	OZON	Male Grooming	{IMAGE1,image2}
7	MASK	MASCARILLA	{IMAGE1,image2}
\.


--
-- TOC entry 3175 (class 0 OID 89348)
-- Dependencies: 223
-- Data for Name: categoryService; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."categoryService" ("createdAt", "updatedAt", "serviceId", "categoryId") FROM stdin;
\.


--
-- TOC entry 3157 (class 0 OID 89207)
-- Dependencies: 205
-- Data for Name: clients; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.clients (id, name, lastname, email, image, mobile, location, password, status) FROM stdin;
\.


--
-- TOC entry 3162 (class 0 OID 89258)
-- Dependencies: 210
-- Data for Name: detailAppointments; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."detailAppointments" (id, "idAppointment", "idService", price) FROM stdin;
\.


--
-- TOC entry 3176 (class 0 OID 89363)
-- Dependencies: 224
-- Data for Name: faceTypeBarber; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."faceTypeBarber" ("createdAt", "updatedAt", "barberId", "faceTypeId") FROM stdin;
2021-06-14 10:23:38.95-05	2021-06-14 10:23:38.95-05	15	3
\.


--
-- TOC entry 3164 (class 0 OID 89266)
-- Dependencies: 212
-- Data for Name: faceTypes; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."faceTypes" (id, description) FROM stdin;
1	Square
2	Triangular
3	Oval
4	Round
5	Long
6	Rectangular
\.


--
-- TOC entry 3177 (class 0 OID 89378)
-- Dependencies: 225
-- Data for Name: hairTypeBarber; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."hairTypeBarber" ("createdAt", "updatedAt", "barberId", "hairTypeId") FROM stdin;
\.


--
-- TOC entry 3166 (class 0 OID 89274)
-- Dependencies: 214
-- Data for Name: hairTypes; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."hairTypes" (id, description) FROM stdin;
2	Curly
3	Straight
4	Wavy
\.


--
-- TOC entry 3169 (class 0 OID 89292)
-- Dependencies: 217
-- Data for Name: serviceBarbers; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."serviceBarbers" (price, image, "barberId", "serviceId") FROM stdin;
\.


--
-- TOC entry 3168 (class 0 OID 89282)
-- Dependencies: 216
-- Data for Name: services; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.services (id, name, price, description, image) FROM stdin;
\.


--
-- TOC entry 3178 (class 0 OID 89393)
-- Dependencies: 226
-- Data for Name: styleBarber; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public."styleBarber" ("createdAt", "updatedAt", "barberId", "styleId") FROM stdin;
\.


--
-- TOC entry 3171 (class 0 OID 89313)
-- Dependencies: 219
-- Data for Name: styles; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.styles (id, description) FROM stdin;
2	Classic
3	Fresh
4	Youth
5	Modern
6	Versatile
7	European
8	Regular
\.


--
-- TOC entry 3172 (class 0 OID 89319)
-- Dependencies: 220
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.subscriptions (id, name, price, category) FROM stdin;
\.


--
-- TOC entry 3174 (class 0 OID 89339)
-- Dependencies: 222
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: alex
--

COPY public.users (id, nombre, "contraseña", email, tipo) FROM stdin;
\.


--
-- TOC entry 3193 (class 0 OID 0)
-- Dependencies: 202
-- Name: barbers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.barbers_id_seq', 33, true);


--
-- TOC entry 3194 (class 0 OID 0)
-- Dependencies: 207
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.categories_id_seq', 7, true);


--
-- TOC entry 3195 (class 0 OID 0)
-- Dependencies: 204
-- Name: clients_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.clients_id_seq', 1, false);


--
-- TOC entry 3196 (class 0 OID 0)
-- Dependencies: 209
-- Name: detailAppointments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."detailAppointments_id_seq"', 1, false);


--
-- TOC entry 3197 (class 0 OID 0)
-- Dependencies: 211
-- Name: faceTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."faceTypes_id_seq"', 1, false);


--
-- TOC entry 3198 (class 0 OID 0)
-- Dependencies: 213
-- Name: hairTypes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public."hairTypes_id_seq"', 1, false);


--
-- TOC entry 3199 (class 0 OID 0)
-- Dependencies: 215
-- Name: services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.services_id_seq', 1, false);


--
-- TOC entry 3200 (class 0 OID 0)
-- Dependencies: 218
-- Name: styles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.styles_id_seq', 1, false);


--
-- TOC entry 3201 (class 0 OID 0)
-- Dependencies: 221
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: alex
--

SELECT pg_catalog.setval('public.users_id_seq', 1, false);


--
-- TOC entry 2987 (class 2606 OID 89233)
-- Name: appointments appointments_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT appointments_pkey PRIMARY KEY ("barberId", "clientId");


--
-- TOC entry 2979 (class 2606 OID 89204)
-- Name: barbers barbers_email_key; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.barbers
    ADD CONSTRAINT barbers_email_key UNIQUE (email);


--
-- TOC entry 2981 (class 2606 OID 89202)
-- Name: barbers barbers_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.barbers
    ADD CONSTRAINT barbers_pkey PRIMARY KEY (id);


--
-- TOC entry 2989 (class 2606 OID 89255)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 3009 (class 2606 OID 89352)
-- Name: categoryService categoryService_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."categoryService"
    ADD CONSTRAINT "categoryService_pkey" PRIMARY KEY ("serviceId", "categoryId");


--
-- TOC entry 2983 (class 2606 OID 89218)
-- Name: clients clients_email_key; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_email_key UNIQUE (email);


--
-- TOC entry 2985 (class 2606 OID 89216)
-- Name: clients clients_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.clients
    ADD CONSTRAINT clients_pkey PRIMARY KEY (id);


--
-- TOC entry 2991 (class 2606 OID 89263)
-- Name: detailAppointments detailAppointments_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."detailAppointments"
    ADD CONSTRAINT "detailAppointments_pkey" PRIMARY KEY (id);


--
-- TOC entry 3011 (class 2606 OID 89367)
-- Name: faceTypeBarber faceTypeBarber_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."faceTypeBarber"
    ADD CONSTRAINT "faceTypeBarber_pkey" PRIMARY KEY ("barberId", "faceTypeId");


--
-- TOC entry 2993 (class 2606 OID 89271)
-- Name: faceTypes faceTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."faceTypes"
    ADD CONSTRAINT "faceTypes_pkey" PRIMARY KEY (id);


--
-- TOC entry 3013 (class 2606 OID 89382)
-- Name: hairTypeBarber hairTypeBarber_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."hairTypeBarber"
    ADD CONSTRAINT "hairTypeBarber_pkey" PRIMARY KEY ("barberId", "hairTypeId");


--
-- TOC entry 2995 (class 2606 OID 89279)
-- Name: hairTypes hairTypes_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."hairTypes"
    ADD CONSTRAINT "hairTypes_pkey" PRIMARY KEY (id);


--
-- TOC entry 2999 (class 2606 OID 89300)
-- Name: serviceBarbers serviceBarbers_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."serviceBarbers"
    ADD CONSTRAINT "serviceBarbers_pkey" PRIMARY KEY ("barberId", "serviceId");


--
-- TOC entry 2997 (class 2606 OID 89291)
-- Name: services services_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.services
    ADD CONSTRAINT services_pkey PRIMARY KEY (id);


--
-- TOC entry 3015 (class 2606 OID 89397)
-- Name: styleBarber styleBarber_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."styleBarber"
    ADD CONSTRAINT "styleBarber_pkey" PRIMARY KEY ("barberId", "styleId");


--
-- TOC entry 3001 (class 2606 OID 89318)
-- Name: styles styles_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.styles
    ADD CONSTRAINT styles_pkey PRIMARY KEY (id);


--
-- TOC entry 3003 (class 2606 OID 89328)
-- Name: subscriptions subscriptions_name_key; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_name_key UNIQUE (name);


--
-- TOC entry 3005 (class 2606 OID 89326)
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- TOC entry 3007 (class 2606 OID 89347)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 3016 (class 2606 OID 89234)
-- Name: appointments appointments_barberId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT "appointments_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES public.barbers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3017 (class 2606 OID 89239)
-- Name: appointments appointments_clientId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public.appointments
    ADD CONSTRAINT "appointments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES public.clients(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3021 (class 2606 OID 89358)
-- Name: categoryService categoryService_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."categoryService"
    ADD CONSTRAINT "categoryService_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3020 (class 2606 OID 89353)
-- Name: categoryService categoryService_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."categoryService"
    ADD CONSTRAINT "categoryService_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3022 (class 2606 OID 89368)
-- Name: faceTypeBarber faceTypeBarber_barberId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."faceTypeBarber"
    ADD CONSTRAINT "faceTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES public.barbers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3023 (class 2606 OID 89373)
-- Name: faceTypeBarber faceTypeBarber_faceTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."faceTypeBarber"
    ADD CONSTRAINT "faceTypeBarber_faceTypeId_fkey" FOREIGN KEY ("faceTypeId") REFERENCES public."faceTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3024 (class 2606 OID 89383)
-- Name: hairTypeBarber hairTypeBarber_barberId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."hairTypeBarber"
    ADD CONSTRAINT "hairTypeBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES public.barbers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3025 (class 2606 OID 89388)
-- Name: hairTypeBarber hairTypeBarber_hairTypeId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."hairTypeBarber"
    ADD CONSTRAINT "hairTypeBarber_hairTypeId_fkey" FOREIGN KEY ("hairTypeId") REFERENCES public."hairTypes"(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3018 (class 2606 OID 89301)
-- Name: serviceBarbers serviceBarbers_barberId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."serviceBarbers"
    ADD CONSTRAINT "serviceBarbers_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES public.barbers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3019 (class 2606 OID 89306)
-- Name: serviceBarbers serviceBarbers_serviceId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."serviceBarbers"
    ADD CONSTRAINT "serviceBarbers_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES public.services(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3026 (class 2606 OID 89398)
-- Name: styleBarber styleBarber_barberId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."styleBarber"
    ADD CONSTRAINT "styleBarber_barberId_fkey" FOREIGN KEY ("barberId") REFERENCES public.barbers(id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- TOC entry 3027 (class 2606 OID 89403)
-- Name: styleBarber styleBarber_styleId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: alex
--

ALTER TABLE ONLY public."styleBarber"
    ADD CONSTRAINT "styleBarber_styleId_fkey" FOREIGN KEY ("styleId") REFERENCES public.styles(id) ON UPDATE CASCADE ON DELETE CASCADE;


-- Completed on 2021-06-14 10:32:01 -05

--
-- PostgreSQL database dump complete
--

