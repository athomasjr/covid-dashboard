export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string
	String: string
	Boolean: boolean
	Int: number
	Float: number
	/** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
	Date: any
}

export type BooleanQueryOperatorInput = {
	eq?: Maybe<Scalars['Boolean']>
	in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
	ne?: Maybe<Scalars['Boolean']>
	nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type CovidData = Node & {
	__typename?: 'CovidData'
	active?: Maybe<Scalars['Int']>
	activePerOneMillion?: Maybe<Scalars['Float']>
	affectedCountries?: Maybe<Scalars['Int']>
	cases?: Maybe<Scalars['Int']>
	casesPerOneMillion?: Maybe<Scalars['Int']>
	children: Array<Node>
	critical?: Maybe<Scalars['Int']>
	criticalPerOneMillion?: Maybe<Scalars['Float']>
	deaths?: Maybe<Scalars['Int']>
	deathsPerOneMillion?: Maybe<Scalars['Float']>
	id: Scalars['ID']
	internal: Internal
	oneCasePerPeople?: Maybe<Scalars['Int']>
	oneDeathPerPeople?: Maybe<Scalars['Int']>
	oneTestPerPeople?: Maybe<Scalars['Int']>
	parent?: Maybe<Node>
	population?: Maybe<Scalars['Float']>
	recovered?: Maybe<Scalars['Int']>
	recoveredPerOneMillion?: Maybe<Scalars['Float']>
	tests?: Maybe<Scalars['Float']>
	testsPerOneMillion?: Maybe<Scalars['Float']>
	todayCases?: Maybe<Scalars['Int']>
	todayDeaths?: Maybe<Scalars['Int']>
	todayRecovered?: Maybe<Scalars['Int']>
	updated?: Maybe<Scalars['Float']>
}

export type CovidDataConnection = {
	__typename?: 'CovidDataConnection'
	distinct: Array<Scalars['String']>
	edges: Array<CovidDataEdge>
	group: Array<CovidDataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<CovidData>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type CovidDataConnectionDistinctArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataConnectionGroupArgs = {
	field: CovidDataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type CovidDataConnectionMaxArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataConnectionMinArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataConnectionSumArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataEdge = {
	__typename?: 'CovidDataEdge'
	next?: Maybe<CovidData>
	node: CovidData
	previous?: Maybe<CovidData>
}

export enum CovidDataFieldsEnum {
	Active = 'active',
	ActivePerOneMillion = 'activePerOneMillion',
	AffectedCountries = 'affectedCountries',
	Cases = 'cases',
	CasesPerOneMillion = 'casesPerOneMillion',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Critical = 'critical',
	CriticalPerOneMillion = 'criticalPerOneMillion',
	Deaths = 'deaths',
	DeathsPerOneMillion = 'deathsPerOneMillion',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	OneCasePerPeople = 'oneCasePerPeople',
	OneDeathPerPeople = 'oneDeathPerPeople',
	OneTestPerPeople = 'oneTestPerPeople',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	Population = 'population',
	Recovered = 'recovered',
	RecoveredPerOneMillion = 'recoveredPerOneMillion',
	Tests = 'tests',
	TestsPerOneMillion = 'testsPerOneMillion',
	TodayCases = 'todayCases',
	TodayDeaths = 'todayDeaths',
	TodayRecovered = 'todayRecovered',
	Updated = 'updated',
}

export type CovidDataFilterInput = {
	active?: Maybe<IntQueryOperatorInput>
	activePerOneMillion?: Maybe<FloatQueryOperatorInput>
	affectedCountries?: Maybe<IntQueryOperatorInput>
	cases?: Maybe<IntQueryOperatorInput>
	casesPerOneMillion?: Maybe<IntQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	critical?: Maybe<IntQueryOperatorInput>
	criticalPerOneMillion?: Maybe<FloatQueryOperatorInput>
	deaths?: Maybe<IntQueryOperatorInput>
	deathsPerOneMillion?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	oneCasePerPeople?: Maybe<IntQueryOperatorInput>
	oneDeathPerPeople?: Maybe<IntQueryOperatorInput>
	oneTestPerPeople?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	population?: Maybe<FloatQueryOperatorInput>
	recovered?: Maybe<IntQueryOperatorInput>
	recoveredPerOneMillion?: Maybe<FloatQueryOperatorInput>
	tests?: Maybe<FloatQueryOperatorInput>
	testsPerOneMillion?: Maybe<FloatQueryOperatorInput>
	todayCases?: Maybe<IntQueryOperatorInput>
	todayDeaths?: Maybe<IntQueryOperatorInput>
	todayRecovered?: Maybe<IntQueryOperatorInput>
	updated?: Maybe<FloatQueryOperatorInput>
}

export type CovidDataGroupConnection = {
	__typename?: 'CovidDataGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<CovidDataEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<CovidDataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<CovidData>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type CovidDataGroupConnectionDistinctArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataGroupConnectionGroupArgs = {
	field: CovidDataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type CovidDataGroupConnectionMaxArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataGroupConnectionMinArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataGroupConnectionSumArgs = {
	field: CovidDataFieldsEnum
}

export type CovidDataSortInput = {
	fields?: Maybe<Array<Maybe<CovidDataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DateQueryOperatorInput = {
	eq?: Maybe<Scalars['Date']>
	gt?: Maybe<Scalars['Date']>
	gte?: Maybe<Scalars['Date']>
	in?: Maybe<Array<Maybe<Scalars['Date']>>>
	lt?: Maybe<Scalars['Date']>
	lte?: Maybe<Scalars['Date']>
	ne?: Maybe<Scalars['Date']>
	nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type Directory = Node & {
	__typename?: 'Directory'
	absolutePath: Scalars['String']
	accessTime: Scalars['Date']
	atime: Scalars['Date']
	atimeMs: Scalars['Float']
	base: Scalars['String']
	birthTime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	changeTime: Scalars['Date']
	children: Array<Node>
	ctime: Scalars['Date']
	ctimeMs: Scalars['Float']
	dev: Scalars['Int']
	dir: Scalars['String']
	ext: Scalars['String']
	extension: Scalars['String']
	gid: Scalars['Int']
	id: Scalars['ID']
	ino: Scalars['Float']
	internal: Internal
	mode: Scalars['Int']
	modifiedTime: Scalars['Date']
	mtime: Scalars['Date']
	mtimeMs: Scalars['Float']
	name: Scalars['String']
	nlink: Scalars['Int']
	parent?: Maybe<Node>
	prettySize: Scalars['String']
	rdev: Scalars['Int']
	relativeDirectory: Scalars['String']
	relativePath: Scalars['String']
	root: Scalars['String']
	size: Scalars['Int']
	sourceInstanceName: Scalars['String']
	uid: Scalars['Int']
}

export type DirectoryAccessTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryModifiedTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type DirectoryConnection = {
	__typename?: 'DirectoryConnection'
	distinct: Array<Scalars['String']>
	edges: Array<DirectoryEdge>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type DirectoryConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type DirectoryConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
	__typename?: 'DirectoryEdge'
	next?: Maybe<Directory>
	node: Directory
	previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
	AbsolutePath = 'absolutePath',
	AccessTime = 'accessTime',
	Atime = 'atime',
	AtimeMs = 'atimeMs',
	Base = 'base',
	BirthTime = 'birthTime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	ChangeTime = 'changeTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Ctime = 'ctime',
	CtimeMs = 'ctimeMs',
	Dev = 'dev',
	Dir = 'dir',
	Ext = 'ext',
	Extension = 'extension',
	Gid = 'gid',
	Id = 'id',
	Ino = 'ino',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Mode = 'mode',
	ModifiedTime = 'modifiedTime',
	Mtime = 'mtime',
	MtimeMs = 'mtimeMs',
	Name = 'name',
	Nlink = 'nlink',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PrettySize = 'prettySize',
	Rdev = 'rdev',
	RelativeDirectory = 'relativeDirectory',
	RelativePath = 'relativePath',
	Root = 'root',
	Size = 'size',
	SourceInstanceName = 'sourceInstanceName',
	Uid = 'uid',
}

export type DirectoryFilterInput = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type DirectoryGroupConnection = {
	__typename?: 'DirectoryGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<DirectoryEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<DirectoryGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Directory>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type DirectoryGroupConnectionDistinctArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
	field: DirectoryFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type DirectoryGroupConnectionMaxArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
	field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
	field: DirectoryFieldsEnum
}

export type DirectorySortInput = {
	fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type File = Node & {
	__typename?: 'File'
	absolutePath: Scalars['String']
	accessTime: Scalars['Date']
	atime: Scalars['Date']
	atimeMs: Scalars['Float']
	base: Scalars['String']
	birthTime: Scalars['Date']
	/** @deprecated Use `birthTime` instead */
	birthtime?: Maybe<Scalars['Date']>
	/** @deprecated Use `birthTime` instead */
	birthtimeMs?: Maybe<Scalars['Float']>
	changeTime: Scalars['Date']
	children: Array<Node>
	ctime: Scalars['Date']
	ctimeMs: Scalars['Float']
	dev: Scalars['Int']
	dir: Scalars['String']
	ext: Scalars['String']
	extension: Scalars['String']
	gid: Scalars['Int']
	id: Scalars['ID']
	ino: Scalars['Float']
	internal: Internal
	mode: Scalars['Int']
	modifiedTime: Scalars['Date']
	mtime: Scalars['Date']
	mtimeMs: Scalars['Float']
	name: Scalars['String']
	nlink: Scalars['Int']
	parent?: Maybe<Node>
	prettySize: Scalars['String']
	rdev: Scalars['Int']
	relativeDirectory: Scalars['String']
	relativePath: Scalars['String']
	root: Scalars['String']
	size: Scalars['Int']
	sourceInstanceName: Scalars['String']
	uid: Scalars['Int']
}

export type FileAccessTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileModifiedTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type FileConnection = {
	__typename?: 'FileConnection'
	distinct: Array<Scalars['String']>
	edges: Array<FileEdge>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type FileConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type FileConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileEdge = {
	__typename?: 'FileEdge'
	next?: Maybe<File>
	node: File
	previous?: Maybe<File>
}

export enum FileFieldsEnum {
	AbsolutePath = 'absolutePath',
	AccessTime = 'accessTime',
	Atime = 'atime',
	AtimeMs = 'atimeMs',
	Base = 'base',
	BirthTime = 'birthTime',
	Birthtime = 'birthtime',
	BirthtimeMs = 'birthtimeMs',
	ChangeTime = 'changeTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Ctime = 'ctime',
	CtimeMs = 'ctimeMs',
	Dev = 'dev',
	Dir = 'dir',
	Ext = 'ext',
	Extension = 'extension',
	Gid = 'gid',
	Id = 'id',
	Ino = 'ino',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Mode = 'mode',
	ModifiedTime = 'modifiedTime',
	Mtime = 'mtime',
	MtimeMs = 'mtimeMs',
	Name = 'name',
	Nlink = 'nlink',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PrettySize = 'prettySize',
	Rdev = 'rdev',
	RelativeDirectory = 'relativeDirectory',
	RelativePath = 'relativePath',
	Root = 'root',
	Size = 'size',
	SourceInstanceName = 'sourceInstanceName',
	Uid = 'uid',
}

export type FileFilterInput = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type FileGroupConnection = {
	__typename?: 'FileGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<FileEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<FileGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<File>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type FileGroupConnectionDistinctArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
	field: FileFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type FileGroupConnectionMaxArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
	field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
	field: FileFieldsEnum
}

export type FileSortInput = {
	fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
	eq?: Maybe<Scalars['Float']>
	gt?: Maybe<Scalars['Float']>
	gte?: Maybe<Scalars['Float']>
	in?: Maybe<Array<Maybe<Scalars['Float']>>>
	lt?: Maybe<Scalars['Float']>
	lte?: Maybe<Scalars['Float']>
	ne?: Maybe<Scalars['Float']>
	nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type IntQueryOperatorInput = {
	eq?: Maybe<Scalars['Int']>
	gt?: Maybe<Scalars['Int']>
	gte?: Maybe<Scalars['Int']>
	in?: Maybe<Array<Maybe<Scalars['Int']>>>
	lt?: Maybe<Scalars['Int']>
	lte?: Maybe<Scalars['Int']>
	ne?: Maybe<Scalars['Int']>
	nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type Internal = {
	__typename?: 'Internal'
	content?: Maybe<Scalars['String']>
	contentDigest: Scalars['String']
	description?: Maybe<Scalars['String']>
	fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
	ignoreType?: Maybe<Scalars['Boolean']>
	mediaType?: Maybe<Scalars['String']>
	owner: Scalars['String']
	type: Scalars['String']
}

export type InternalFilterInput = {
	content?: Maybe<StringQueryOperatorInput>
	contentDigest?: Maybe<StringQueryOperatorInput>
	description?: Maybe<StringQueryOperatorInput>
	fieldOwners?: Maybe<StringQueryOperatorInput>
	ignoreType?: Maybe<BooleanQueryOperatorInput>
	mediaType?: Maybe<StringQueryOperatorInput>
	owner?: Maybe<StringQueryOperatorInput>
	type?: Maybe<StringQueryOperatorInput>
}

/** Node Interface */
export type Node = {
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
}

export type NodeFilterInput = {
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type NodeFilterListInput = {
	elemMatch?: Maybe<NodeFilterInput>
}

export type PageInfo = {
	__typename?: 'PageInfo'
	currentPage: Scalars['Int']
	hasNextPage: Scalars['Boolean']
	hasPreviousPage: Scalars['Boolean']
	itemCount: Scalars['Int']
	pageCount: Scalars['Int']
	perPage?: Maybe<Scalars['Int']>
	totalCount: Scalars['Int']
}

export type Query = {
	__typename?: 'Query'
	allCovidData: CovidDataConnection
	allDirectory: DirectoryConnection
	allFile: FileConnection
	allSite: SiteConnection
	allSiteBuildMetadata: SiteBuildMetadataConnection
	allSiteFunction: SiteFunctionConnection
	allSitePage: SitePageConnection
	allSitePlugin: SitePluginConnection
	covidData?: Maybe<CovidData>
	directory?: Maybe<Directory>
	file?: Maybe<File>
	site?: Maybe<Site>
	siteBuildMetadata?: Maybe<SiteBuildMetadata>
	siteFunction?: Maybe<SiteFunction>
	sitePage?: Maybe<SitePage>
	sitePlugin?: Maybe<SitePlugin>
}

export type QueryAllCovidDataArgs = {
	filter?: Maybe<CovidDataFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<CovidDataSortInput>
}

export type QueryAllDirectoryArgs = {
	filter?: Maybe<DirectoryFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<DirectorySortInput>
}

export type QueryAllFileArgs = {
	filter?: Maybe<FileFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<FileSortInput>
}

export type QueryAllSiteArgs = {
	filter?: Maybe<SiteFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteSortInput>
}

export type QueryAllSiteBuildMetadataArgs = {
	filter?: Maybe<SiteBuildMetadataFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteBuildMetadataSortInput>
}

export type QueryAllSiteFunctionArgs = {
	filter?: Maybe<SiteFunctionFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SiteFunctionSortInput>
}

export type QueryAllSitePageArgs = {
	filter?: Maybe<SitePageFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SitePageSortInput>
}

export type QueryAllSitePluginArgs = {
	filter?: Maybe<SitePluginFilterInput>
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
	sort?: Maybe<SitePluginSortInput>
}

export type QueryCovidDataArgs = {
	active?: Maybe<IntQueryOperatorInput>
	activePerOneMillion?: Maybe<FloatQueryOperatorInput>
	affectedCountries?: Maybe<IntQueryOperatorInput>
	cases?: Maybe<IntQueryOperatorInput>
	casesPerOneMillion?: Maybe<IntQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	critical?: Maybe<IntQueryOperatorInput>
	criticalPerOneMillion?: Maybe<FloatQueryOperatorInput>
	deaths?: Maybe<IntQueryOperatorInput>
	deathsPerOneMillion?: Maybe<FloatQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	oneCasePerPeople?: Maybe<IntQueryOperatorInput>
	oneDeathPerPeople?: Maybe<IntQueryOperatorInput>
	oneTestPerPeople?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	population?: Maybe<FloatQueryOperatorInput>
	recovered?: Maybe<IntQueryOperatorInput>
	recoveredPerOneMillion?: Maybe<FloatQueryOperatorInput>
	tests?: Maybe<FloatQueryOperatorInput>
	testsPerOneMillion?: Maybe<FloatQueryOperatorInput>
	todayCases?: Maybe<IntQueryOperatorInput>
	todayDeaths?: Maybe<IntQueryOperatorInput>
	todayRecovered?: Maybe<IntQueryOperatorInput>
	updated?: Maybe<FloatQueryOperatorInput>
}

export type QueryDirectoryArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type QueryFileArgs = {
	absolutePath?: Maybe<StringQueryOperatorInput>
	accessTime?: Maybe<DateQueryOperatorInput>
	atime?: Maybe<DateQueryOperatorInput>
	atimeMs?: Maybe<FloatQueryOperatorInput>
	base?: Maybe<StringQueryOperatorInput>
	birthTime?: Maybe<DateQueryOperatorInput>
	birthtime?: Maybe<DateQueryOperatorInput>
	birthtimeMs?: Maybe<FloatQueryOperatorInput>
	changeTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	ctime?: Maybe<DateQueryOperatorInput>
	ctimeMs?: Maybe<FloatQueryOperatorInput>
	dev?: Maybe<IntQueryOperatorInput>
	dir?: Maybe<StringQueryOperatorInput>
	ext?: Maybe<StringQueryOperatorInput>
	extension?: Maybe<StringQueryOperatorInput>
	gid?: Maybe<IntQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	ino?: Maybe<FloatQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	mode?: Maybe<IntQueryOperatorInput>
	modifiedTime?: Maybe<DateQueryOperatorInput>
	mtime?: Maybe<DateQueryOperatorInput>
	mtimeMs?: Maybe<FloatQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	nlink?: Maybe<IntQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	prettySize?: Maybe<StringQueryOperatorInput>
	rdev?: Maybe<IntQueryOperatorInput>
	relativeDirectory?: Maybe<StringQueryOperatorInput>
	relativePath?: Maybe<StringQueryOperatorInput>
	root?: Maybe<StringQueryOperatorInput>
	size?: Maybe<IntQueryOperatorInput>
	sourceInstanceName?: Maybe<StringQueryOperatorInput>
	uid?: Maybe<IntQueryOperatorInput>
}

export type QuerySiteArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type QuerySiteBuildMetadataArgs = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type QuerySiteFunctionArgs = {
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePageArgs = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	mode?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QuerySitePluginArgs = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type Site = Node & {
	__typename?: 'Site'
	buildTime?: Maybe<Scalars['Date']>
	children: Array<Node>
	host?: Maybe<Scalars['String']>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
	pathPrefix?: Maybe<Scalars['String']>
	polyfill?: Maybe<Scalars['Boolean']>
	port?: Maybe<Scalars['Int']>
	siteMetadata?: Maybe<SiteSiteMetadata>
}

export type SiteBuildTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
	__typename?: 'SiteBuildMetadata'
	buildTime?: Maybe<Scalars['Date']>
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	parent?: Maybe<Node>
}

export type SiteBuildMetadataBuildTimeArgs = {
	difference?: Maybe<Scalars['String']>
	formatString?: Maybe<Scalars['String']>
	fromNow?: Maybe<Scalars['Boolean']>
	locale?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataConnection = {
	__typename?: 'SiteBuildMetadataConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteBuildMetadataEdge>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteBuildMetadataConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
	__typename?: 'SiteBuildMetadataEdge'
	next?: Maybe<SiteBuildMetadata>
	node: SiteBuildMetadata
	previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
	BuildTime = 'buildTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
}

export type SiteBuildMetadataFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
}

export type SiteBuildMetadataGroupConnection = {
	__typename?: 'SiteBuildMetadataGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteBuildMetadataEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteBuildMetadataGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteBuildMetadata>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
	field: SiteBuildMetadataFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
	field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataSortInput = {
	fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
	__typename?: 'SiteConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteEdge>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SiteEdge = {
	__typename?: 'SiteEdge'
	next?: Maybe<Site>
	node: Site
	previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
	BuildTime = 'buildTime',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Host = 'host',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PathPrefix = 'pathPrefix',
	Polyfill = 'polyfill',
	Port = 'port',
	SiteMetadataDescription = 'siteMetadata___description',
	SiteMetadataTitle = 'siteMetadata___title',
}

export type SiteFilterInput = {
	buildTime?: Maybe<DateQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	host?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	parent?: Maybe<NodeFilterInput>
	pathPrefix?: Maybe<StringQueryOperatorInput>
	polyfill?: Maybe<BooleanQueryOperatorInput>
	port?: Maybe<IntQueryOperatorInput>
	siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
}

export type SiteFunction = Node & {
	__typename?: 'SiteFunction'
	absoluteCompiledFilePath: Scalars['String']
	children: Array<Node>
	functionRoute: Scalars['String']
	id: Scalars['ID']
	internal: Internal
	matchPath?: Maybe<Scalars['String']>
	originalAbsoluteFilePath: Scalars['String']
	originalRelativeFilePath: Scalars['String']
	parent?: Maybe<Node>
	pluginName: Scalars['String']
	relativeCompiledFilePath: Scalars['String']
}

export type SiteFunctionConnection = {
	__typename?: 'SiteFunctionConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteFunctionEdge>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteFunctionConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
	__typename?: 'SiteFunctionEdge'
	next?: Maybe<SiteFunction>
	node: SiteFunction
	previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
	AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	FunctionRoute = 'functionRoute',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	MatchPath = 'matchPath',
	OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
	OriginalRelativeFilePath = 'originalRelativeFilePath',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PluginName = 'pluginName',
	RelativeCompiledFilePath = 'relativeCompiledFilePath',
}

export type SiteFunctionFilterInput = {
	absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	functionRoute?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
	originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	pluginName?: Maybe<StringQueryOperatorInput>
	relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
}

export type SiteFunctionGroupConnection = {
	__typename?: 'SiteFunctionGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteFunctionEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteFunctionGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SiteFunction>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteFunctionGroupConnectionDistinctArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
	field: SiteFunctionFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteFunctionGroupConnectionMaxArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
	field: SiteFunctionFieldsEnum
}

export type SiteFunctionSortInput = {
	fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
	__typename?: 'SiteGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SiteEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SiteGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<Site>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SiteGroupConnectionDistinctArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
	field: SiteFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SiteGroupConnectionMaxArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
	field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
	field: SiteFieldsEnum
}

export type SitePage = Node & {
	__typename?: 'SitePage'
	children: Array<Node>
	component: Scalars['String']
	componentChunkName: Scalars['String']
	id: Scalars['ID']
	internal: Internal
	internalComponentName: Scalars['String']
	isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
	matchPath?: Maybe<Scalars['String']>
	mode?: Maybe<Scalars['String']>
	parent?: Maybe<Node>
	path: Scalars['String']
	pluginCreator?: Maybe<SitePlugin>
	pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageConnection = {
	__typename?: 'SitePageConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePageEdge>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePageConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePageConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageEdge = {
	__typename?: 'SitePageEdge'
	next?: Maybe<SitePage>
	node: SitePage
	previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Component = 'component',
	ComponentChunkName = 'componentChunkName',
	Id = 'id',
	InternalComponentName = 'internalComponentName',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
	MatchPath = 'matchPath',
	Mode = 'mode',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	Path = 'path',
	PluginCreatorId = 'pluginCreatorId',
	PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
	PluginCreatorChildren = 'pluginCreator___children',
	PluginCreatorChildrenChildren = 'pluginCreator___children___children',
	PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
	PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
	PluginCreatorChildrenId = 'pluginCreator___children___id',
	PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
	PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
	PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
	PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
	PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
	PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
	PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
	PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
	PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
	PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
	PluginCreatorId = 'pluginCreator___id',
	PluginCreatorInternalContent = 'pluginCreator___internal___content',
	PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
	PluginCreatorInternalDescription = 'pluginCreator___internal___description',
	PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
	PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
	PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
	PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
	PluginCreatorInternalType = 'pluginCreator___internal___type',
	PluginCreatorName = 'pluginCreator___name',
	PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
	PluginCreatorPackageJsonAuthor = 'pluginCreator___packageJson___author',
	PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
	PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
	PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
	PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
	PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
	PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
	PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
	PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
	PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
	PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
	PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
	PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
	PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
	PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
	PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
	PluginCreatorParentChildren = 'pluginCreator___parent___children',
	PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
	PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
	PluginCreatorParentId = 'pluginCreator___parent___id',
	PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
	PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
	PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
	PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
	PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
	PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
	PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
	PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
	PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
	PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
	PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
	PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
	PluginCreatorPluginOptionsComponents = 'pluginCreator___pluginOptions___components',
	PluginCreatorPluginOptionsHooks = 'pluginCreator___pluginOptions___hooks',
	PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
	PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
	PluginCreatorPluginOptionsLayouts = 'pluginCreator___pluginOptions___layouts',
	PluginCreatorPluginOptionsPages = 'pluginCreator___pluginOptions___pages',
	PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
	PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
	PluginCreatorPluginOptionsStyles = 'pluginCreator___pluginOptions___styles',
	PluginCreatorPluginOptionsTypes = 'pluginCreator___pluginOptions___types',
	PluginCreatorResolve = 'pluginCreator___resolve',
	PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
	PluginCreatorVersion = 'pluginCreator___version',
}

export type SitePageFilterInput = {
	children?: Maybe<NodeFilterListInput>
	component?: Maybe<StringQueryOperatorInput>
	componentChunkName?: Maybe<StringQueryOperatorInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	internalComponentName?: Maybe<StringQueryOperatorInput>
	isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
	matchPath?: Maybe<StringQueryOperatorInput>
	mode?: Maybe<StringQueryOperatorInput>
	parent?: Maybe<NodeFilterInput>
	path?: Maybe<StringQueryOperatorInput>
	pluginCreator?: Maybe<SitePluginFilterInput>
	pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
	__typename?: 'SitePageGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePageEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SitePageGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePage>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePageGroupConnectionDistinctArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
	field: SitePageFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePageGroupConnectionMaxArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
	field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
	field: SitePageFieldsEnum
}

export type SitePageSortInput = {
	fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
	__typename?: 'SitePlugin'
	browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	children: Array<Node>
	id: Scalars['ID']
	internal: Internal
	name?: Maybe<Scalars['String']>
	nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	packageJson?: Maybe<SitePluginPackageJson>
	parent?: Maybe<Node>
	pluginFilepath?: Maybe<Scalars['String']>
	pluginOptions?: Maybe<SitePluginPluginOptions>
	resolve?: Maybe<Scalars['String']>
	ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
	version?: Maybe<Scalars['String']>
}

export type SitePluginConnection = {
	__typename?: 'SitePluginConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePluginEdge>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePluginConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePluginConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
	__typename?: 'SitePluginEdge'
	next?: Maybe<SitePlugin>
	node: SitePlugin
	previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
	BrowserApIs = 'browserAPIs',
	Children = 'children',
	ChildrenChildren = 'children___children',
	ChildrenChildrenChildren = 'children___children___children',
	ChildrenChildrenChildrenChildren = 'children___children___children___children',
	ChildrenChildrenChildrenId = 'children___children___children___id',
	ChildrenChildrenId = 'children___children___id',
	ChildrenChildrenInternalContent = 'children___children___internal___content',
	ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
	ChildrenChildrenInternalDescription = 'children___children___internal___description',
	ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
	ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
	ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
	ChildrenChildrenInternalOwner = 'children___children___internal___owner',
	ChildrenChildrenInternalType = 'children___children___internal___type',
	ChildrenChildrenParentChildren = 'children___children___parent___children',
	ChildrenChildrenParentId = 'children___children___parent___id',
	ChildrenId = 'children___id',
	ChildrenInternalContent = 'children___internal___content',
	ChildrenInternalContentDigest = 'children___internal___contentDigest',
	ChildrenInternalDescription = 'children___internal___description',
	ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
	ChildrenInternalIgnoreType = 'children___internal___ignoreType',
	ChildrenInternalMediaType = 'children___internal___mediaType',
	ChildrenInternalOwner = 'children___internal___owner',
	ChildrenInternalType = 'children___internal___type',
	ChildrenParentChildren = 'children___parent___children',
	ChildrenParentChildrenChildren = 'children___parent___children___children',
	ChildrenParentChildrenId = 'children___parent___children___id',
	ChildrenParentId = 'children___parent___id',
	ChildrenParentInternalContent = 'children___parent___internal___content',
	ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
	ChildrenParentInternalDescription = 'children___parent___internal___description',
	ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
	ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
	ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
	ChildrenParentInternalOwner = 'children___parent___internal___owner',
	ChildrenParentInternalType = 'children___parent___internal___type',
	ChildrenParentParentChildren = 'children___parent___parent___children',
	ChildrenParentParentId = 'children___parent___parent___id',
	Id = 'id',
	InternalContent = 'internal___content',
	InternalContentDigest = 'internal___contentDigest',
	InternalDescription = 'internal___description',
	InternalFieldOwners = 'internal___fieldOwners',
	InternalIgnoreType = 'internal___ignoreType',
	InternalMediaType = 'internal___mediaType',
	InternalOwner = 'internal___owner',
	InternalType = 'internal___type',
	Name = 'name',
	NodeApIs = 'nodeAPIs',
	PackageJsonAuthor = 'packageJson___author',
	PackageJsonDependencies = 'packageJson___dependencies',
	PackageJsonDependenciesName = 'packageJson___dependencies___name',
	PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
	PackageJsonDescription = 'packageJson___description',
	PackageJsonDevDependencies = 'packageJson___devDependencies',
	PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
	PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
	PackageJsonKeywords = 'packageJson___keywords',
	PackageJsonLicense = 'packageJson___license',
	PackageJsonMain = 'packageJson___main',
	PackageJsonName = 'packageJson___name',
	PackageJsonPeerDependencies = 'packageJson___peerDependencies',
	PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
	PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
	PackageJsonVersion = 'packageJson___version',
	ParentChildren = 'parent___children',
	ParentChildrenChildren = 'parent___children___children',
	ParentChildrenChildrenChildren = 'parent___children___children___children',
	ParentChildrenChildrenId = 'parent___children___children___id',
	ParentChildrenId = 'parent___children___id',
	ParentChildrenInternalContent = 'parent___children___internal___content',
	ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
	ParentChildrenInternalDescription = 'parent___children___internal___description',
	ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
	ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
	ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
	ParentChildrenInternalOwner = 'parent___children___internal___owner',
	ParentChildrenInternalType = 'parent___children___internal___type',
	ParentChildrenParentChildren = 'parent___children___parent___children',
	ParentChildrenParentId = 'parent___children___parent___id',
	ParentId = 'parent___id',
	ParentInternalContent = 'parent___internal___content',
	ParentInternalContentDigest = 'parent___internal___contentDigest',
	ParentInternalDescription = 'parent___internal___description',
	ParentInternalFieldOwners = 'parent___internal___fieldOwners',
	ParentInternalIgnoreType = 'parent___internal___ignoreType',
	ParentInternalMediaType = 'parent___internal___mediaType',
	ParentInternalOwner = 'parent___internal___owner',
	ParentInternalType = 'parent___internal___type',
	ParentParentChildren = 'parent___parent___children',
	ParentParentChildrenChildren = 'parent___parent___children___children',
	ParentParentChildrenId = 'parent___parent___children___id',
	ParentParentId = 'parent___parent___id',
	ParentParentInternalContent = 'parent___parent___internal___content',
	ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
	ParentParentInternalDescription = 'parent___parent___internal___description',
	ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
	ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
	ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
	ParentParentInternalOwner = 'parent___parent___internal___owner',
	ParentParentInternalType = 'parent___parent___internal___type',
	ParentParentParentChildren = 'parent___parent___parent___children',
	ParentParentParentId = 'parent___parent___parent___id',
	PluginFilepath = 'pluginFilepath',
	PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
	PluginOptionsComponents = 'pluginOptions___components',
	PluginOptionsHooks = 'pluginOptions___hooks',
	PluginOptionsIsTsx = 'pluginOptions___isTSX',
	PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
	PluginOptionsLayouts = 'pluginOptions___layouts',
	PluginOptionsPages = 'pluginOptions___pages',
	PluginOptionsPath = 'pluginOptions___path',
	PluginOptionsPathCheck = 'pluginOptions___pathCheck',
	PluginOptionsStyles = 'pluginOptions___styles',
	PluginOptionsTypes = 'pluginOptions___types',
	Resolve = 'resolve',
	SsrApIs = 'ssrAPIs',
	Version = 'version',
}

export type SitePluginFilterInput = {
	browserAPIs?: Maybe<StringQueryOperatorInput>
	children?: Maybe<NodeFilterListInput>
	id?: Maybe<StringQueryOperatorInput>
	internal?: Maybe<InternalFilterInput>
	name?: Maybe<StringQueryOperatorInput>
	nodeAPIs?: Maybe<StringQueryOperatorInput>
	packageJson?: Maybe<SitePluginPackageJsonFilterInput>
	parent?: Maybe<NodeFilterInput>
	pluginFilepath?: Maybe<StringQueryOperatorInput>
	pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
	resolve?: Maybe<StringQueryOperatorInput>
	ssrAPIs?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginGroupConnection = {
	__typename?: 'SitePluginGroupConnection'
	distinct: Array<Scalars['String']>
	edges: Array<SitePluginEdge>
	field: Scalars['String']
	fieldValue?: Maybe<Scalars['String']>
	group: Array<SitePluginGroupConnection>
	max?: Maybe<Scalars['Float']>
	min?: Maybe<Scalars['Float']>
	nodes: Array<SitePlugin>
	pageInfo: PageInfo
	sum?: Maybe<Scalars['Float']>
	totalCount: Scalars['Int']
}

export type SitePluginGroupConnectionDistinctArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
	field: SitePluginFieldsEnum
	limit?: Maybe<Scalars['Int']>
	skip?: Maybe<Scalars['Int']>
}

export type SitePluginGroupConnectionMaxArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
	field: SitePluginFieldsEnum
}

export type SitePluginPackageJson = {
	__typename?: 'SitePluginPackageJson'
	author?: Maybe<Scalars['String']>
	dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
	description?: Maybe<Scalars['String']>
	devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
	keywords?: Maybe<Array<Maybe<Scalars['String']>>>
	license?: Maybe<Scalars['String']>
	main?: Maybe<Scalars['String']>
	name?: Maybe<Scalars['String']>
	peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependencies = {
	__typename?: 'SitePluginPackageJsonDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
	__typename?: 'SitePluginPackageJsonDevDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
	author?: Maybe<StringQueryOperatorInput>
	dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
	description?: Maybe<StringQueryOperatorInput>
	devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
	keywords?: Maybe<StringQueryOperatorInput>
	license?: Maybe<StringQueryOperatorInput>
	main?: Maybe<StringQueryOperatorInput>
	name?: Maybe<StringQueryOperatorInput>
	peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
	__typename?: 'SitePluginPackageJsonPeerDependencies'
	name?: Maybe<Scalars['String']>
	version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
	name?: Maybe<StringQueryOperatorInput>
	version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
	elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
	__typename?: 'SitePluginPluginOptions'
	allExtensions?: Maybe<Scalars['Boolean']>
	components?: Maybe<Scalars['String']>
	hooks?: Maybe<Scalars['String']>
	isTSX?: Maybe<Scalars['Boolean']>
	jsxPragma?: Maybe<Scalars['String']>
	layouts?: Maybe<Scalars['String']>
	pages?: Maybe<Scalars['String']>
	path?: Maybe<Scalars['String']>
	pathCheck?: Maybe<Scalars['Boolean']>
	styles?: Maybe<Scalars['String']>
	types?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsFilterInput = {
	allExtensions?: Maybe<BooleanQueryOperatorInput>
	components?: Maybe<StringQueryOperatorInput>
	hooks?: Maybe<StringQueryOperatorInput>
	isTSX?: Maybe<BooleanQueryOperatorInput>
	jsxPragma?: Maybe<StringQueryOperatorInput>
	layouts?: Maybe<StringQueryOperatorInput>
	pages?: Maybe<StringQueryOperatorInput>
	path?: Maybe<StringQueryOperatorInput>
	pathCheck?: Maybe<BooleanQueryOperatorInput>
	styles?: Maybe<StringQueryOperatorInput>
	types?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
	fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
	__typename?: 'SiteSiteMetadata'
	description?: Maybe<Scalars['String']>
	title?: Maybe<Scalars['String']>
}

export type SiteSiteMetadataFilterInput = {
	description?: Maybe<StringQueryOperatorInput>
	title?: Maybe<StringQueryOperatorInput>
}

export type SiteSortInput = {
	fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
	order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export enum SortOrderEnum {
	Asc = 'ASC',
	Desc = 'DESC',
}

export type StringQueryOperatorInput = {
	eq?: Maybe<Scalars['String']>
	glob?: Maybe<Scalars['String']>
	in?: Maybe<Array<Maybe<Scalars['String']>>>
	ne?: Maybe<Scalars['String']>
	nin?: Maybe<Array<Maybe<Scalars['String']>>>
	regex?: Maybe<Scalars['String']>
}

export type CovidDataQueryVariables = Exact<{ [key: string]: never }>

export type CovidDataQuery = {
	__typename?: 'Query'
	covidData?: Maybe<{
		__typename?: 'CovidData'
		deaths?: Maybe<number>
		cases?: Maybe<number>
		recovered?: Maybe<number>
	}>
}
